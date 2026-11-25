import { readFile, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";

import { z } from "zod";

import { getChatProvider } from "../src/lib/ai/get-chat-provider";
import type { ChatMessage } from "../src/lib/ai/chat-provider";
import { sourcesSchema } from "../src/lib/chat/chat-data";
import {
  DIMENSIONS,
  digestFile,
  indexPath,
  knowledgeRoot,
  readPointer,
  SHA256,
  sha256,
} from "../src/lib/knowledge/manuals/config";
import { embedTexts, getEmbeddingQuota } from "../src/lib/knowledge/manuals/embedding";
import {
  citedSources,
  groundedAnswer,
  manualContext,
  manualSystem,
  NO_ANSWER_SENTENCE,
} from "../src/lib/knowledge/manuals/grounding";
import {
  retrieveManuals,
  searchQuestion,
  type ManualEvidence,
} from "../src/lib/knowledge/manuals/retrieve";
import { assertComplete, openIndex, readMeta } from "../src/lib/knowledge/manuals/store";
import { acceptance, calibration, type EvaluationCase } from "./kb-evaluation-cases";
import { fullHoldout, holdout, releaseHoldout, reserveHoldout } from "./kb-evaluation-holdout";

const args = process.argv.slice(2);
const option = (name: string) =>
  args.find((argument) => argument.startsWith(name + "="))?.slice(name.length + 1);
const matchesGold = (sample: EvaluationCase, results: readonly ManualEvidence[]) =>
  "source" in sample
    ? results.some(
        (hit) =>
          hit.documentName.includes(sample.source) &&
          (!sample.pages.length || sample.pages.includes(hit.page)),
      )
    : !results.length;

function percentiles(values: number[]) {
  if (!values.length) return null;
  const sorted = values.toSorted((a, b) => a - b);
  const valueAt = (percentage: number) =>
    Math.round(sorted[Math.max(0, Math.ceil(sorted.length * percentage) - 1)] ?? 0);
  return { p50Ms: valueAt(0.5), p95Ms: valueAt(0.95) };
}

async function measureRetrieval(
  root: string,
  generation: string,
  questions: ReturnType<typeof searchQuestion>[],
) {
  const cacheFile = process.env.KB_EVAL_QUERY_CACHE_FILE;
  if (!cacheFile) throw new Error("Indica KB_EVAL_QUERY_CACHE_FILE para medir la recuperación.");
  const cache = z.record(z.string()).parse(JSON.parse(await readFile(cacheFile, "utf8")));
  const queries = questions.flatMap(({ text, needsLiveData }) => {
    const encoded = cache[sha256(text)];
    if (needsLiveData || !encoded) return [];
    const bytes = Buffer.from(encoded, "base64");
    if (bytes.length !== DIMENSIONS * 4) throw new Error("Dimensiones de evaluación inválidas.");
    return [
      {
        text,
        queryVector: Float32Array.from({ length: DIMENSIONS }, (_, i) => bytes.readFloatLE(i * 4)),
      },
    ];
  });
  const first = queries[0];
  if (!first) throw new Error("No hay consultas con vector en caché.");
  await retrieveManuals(first.text, { root, generation, queryVector: first.queryVector });
  const latencies = [];
  for (const { text, queryVector } of queries) {
    const result = await retrieveManuals(text, { root, generation, queryVector });
    if (result.mode !== "hybrid") throw new Error("La medición requiere recuperación híbrida.");
    latencies.push(result.timings.local);
  }
  console.log(
    JSON.stringify(
      { generation, samples: latencies.length, localRetrieval: percentiles(latencies) },
      null,
      2,
    ),
  );
}

async function main() {
  const root = knowledgeRoot();
  const generation =
    option("--generation") ||
    (await readPointer(root, "candidate")) ||
    (await readPointer(root, "active"));
  if (!generation) throw new Error("No hay una generación RAG para evaluar.");
  const calibrate = args.includes("--calibrate");
  const lexical = args.includes("--lexical");
  const holdoutSamples = [
    ["--holdout-release", releaseHoldout],
    ["--holdout-reserve", reserveHoldout],
    ["--holdout-full", fullHoldout],
    ["--holdout", holdout],
  ] as const;
  const [sampleFlag, selected] = holdoutSamples.find(([flag]) => args.includes(flag)) ?? [];
  const samples = calibrate ? calibration : (selected ?? acceptance);
  const isHoldout = !calibrate && selected !== undefined;
  const database = openIndex(root, generation);
  let inventoryHash: string | null;
  try {
    if (isHoldout) assertComplete(database);
    inventoryHash = readMeta(database, "inventoryHash");
  } finally {
    database.close();
  }
  const questions = samples.map(({ question, previous }) => searchQuestion(question, previous));
  if (args.includes("--measure-retrieval")) return measureRetrieval(root, generation, questions);
  const replay = option("--query-cache");
  const prepare = args.includes("--prime-queries");
  const quota = lexical || replay ? null : await getEmbeddingQuota();
  if (!lexical && !replay && !quota)
    throw new Error(
      "Las claves de embeddings han agotado la cuota. Usa la caché de evaluación si ya existe.",
    );
  const embeddingStarted = performance.now();
  const vectors = quota
    ? await embedTexts(
        root,
        questions.map(({ text }) => text),
        "query",
        { slot: quota.slot },
      )
    : [];
  const embeddingBatchMs = Math.round(performance.now() - embeddingStarted);
  if (prepare) {
    const output = path.resolve(option("--out") || path.join(root, "evaluation-queries.json"));
    const cold = Number(option("--cold") ?? 0);
    if (
      vectors.length !== samples.length ||
      !Number.isInteger(cold) ||
      cold < 0 ||
      cold > samples.length
    )
      throw new Error("Preparación de consultas inválida.");
    const entries = questions.flatMap(({ text }, index) => {
      const vector = vectors[index];
      return vector && index >= cold
        ? [
            [
              sha256(text),
              Buffer.from(vector.buffer, vector.byteOffset, vector.byteLength).toString("base64"),
            ],
          ]
        : [];
    });
    await writeFile(output, JSON.stringify(Object.fromEntries(entries)));
    console.log(JSON.stringify({ output, embeddingBatchMs, cached: entries.length, cold }));
    return;
  }
  const provider = getChatProvider();
  const providerStatus = provider.getStatus();
  if (!calibrate && !providerStatus.configured)
    throw new Error("El modelo de chat no está configurado.");
  const server = option("--server");
  const sealed = Boolean(server && isHoldout);
  const indexFile = indexPath(root, generation);
  const indexSha256 = sealed ? (await digestFile(indexFile)).checksum : undefined;
  if (sealed) {
    const seal = z
      .object({
        generation: z.string(),
        inventoryHash: z.string().regex(SHA256),
        indexSha256: z.string().regex(SHA256),
      })
      .parse(JSON.parse(await readFile(path.join(root, "snapshot.json"), "utf8")));
    if (
      seal.generation !== generation ||
      seal.inventoryHash !== inventoryHash ||
      seal.indexSha256 !== indexSha256 ||
      (await readPointer(root, "active")) !== generation
    )
      throw new Error("El servidor debe evaluar la instantánea sellada.");
  }
  const http = server
    ? await (await import("./kb-evaluation-http")).createHttpEvaluation(server)
    : null;
  const retrieval = http
    ? []
    : await Promise.all(
        samples.map((sample, index) =>
          retrieveManuals(questions[index]?.text ?? "", {
            root,
            generation,
            lexicalOnly: lexical,
            queryVector: vectors[index],
          }).then((result) => ({ ...result, match: matchesGold(sample, result.evidence) })),
        ),
      );
  if (calibrate) {
    const plain = await Promise.all(
      samples.map((sample, index) =>
        retrieveManuals(questions[index]?.text ?? "", {
          root,
          generation,
          lexicalOnly: lexical,
          queryVector: vectors[index],
          localRerank: false,
        }).then((result) => ({ ...result, match: matchesGold(sample, result.evidence) })),
      ),
    );
    console.table(
      samples.map((sample, index) => ({
        case: index + 1,
        question: sample.question,
        baseline: plain[index]?.match,
        rerank: retrieval[index]?.match,
        first: retrieval[index]?.evidence[0]?.documentName,
      })),
    );
    console.log(
      JSON.stringify(
        {
          generation,
          embeddingBatchMs,
          cases: samples.length,
          rerank: retrieval.filter(({ match }) => match).length,
          baseline: plain.filter(({ match }) => match).length,
        },
        null,
        2,
      ),
    );
    return;
  }

  const output = path.resolve(option("--out") || path.join(root, "evaluation.json"));
  const partial = output + ".partial";
  async function saveReport(file: string, report: unknown) {
    const temporary = file + "." + process.pid + ".tmp";
    await writeFile(temporary, JSON.stringify(report, null, 2));
    await rename(temporary, file);
  }
  const outputs = new Map<
    number,
    {
      answer: string;
      sources: ReturnType<typeof citedSources>;
      firstMs: number;
      generationMs: number;
      error?: string;
    }
  >();
  let pendingWrite = Promise.resolve();
  function checkpoint() {
    if (!sealed) return Promise.resolve();
    const cases = [...outputs].map(([index, result]) => ({
      id: index + 1,
      question: samples[index]?.question,
      ...result,
    }));
    pendingWrite = pendingWrite.then(() =>
      saveReport(partial, {
        generation,
        inventoryHash,
        indexSha256,
        sampleSize: samples.length,
        sample: sampleFlag,
        model: providerStatus.model,
        cases,
      }),
    );
    return pendingWrite;
  }
  const retry = args.includes("--retry");
  if (retry) {
    const requested = new Set(option("--retry-cases")?.split(",").map(Number) ?? []);
    const prior = await readFile(partial, "utf8").catch((error: unknown) => {
      if (error instanceof Error && "code" in error && error.code === "ENOENT")
        return readFile(output, "utf8");
      throw error;
    });
    const previous = z
      .object({
        generation: z.string(),
        inventoryHash: z.string().nullable(),
        indexSha256: z.string().regex(SHA256).optional(),
        sampleSize: z.number().int().positive().optional(),
        sample: z.string().optional(),
        model: z.string().optional(),
        cases: z.array(
          z.object({
            id: z.number().int().positive(),
            question: z.string(),
            answer: z.string(),
            sources: sourcesSchema,
            firstMs: z.number(),
            generationMs: z.number(),
            error: z.string().optional(),
          }),
        ),
      })
      .parse(JSON.parse(prior));
    if (
      previous.generation !== generation ||
      previous.inventoryHash !== inventoryHash ||
      previous.indexSha256 !== indexSha256 ||
      (sealed &&
        (previous.model !== providerStatus.model ||
          (previous.sampleSize ?? 40) !== samples.length ||
          (previous.sample ?? (previous.sampleSize === 20 ? "--holdout" : "--holdout-full")) !==
            sampleFlag))
    )
      throw new Error("El informe previo corresponde a otra generación, muestra o modelo.");
    for (const finished of previous.cases) {
      if (sealed && requested.has(finished.id) && !finished.error && finished.answer)
        throw new Error("Solo pueden repetirse fallos de transporte del holdout.");
      if (
        !finished.error &&
        finished.answer &&
        !requested.has(finished.id) &&
        samples[finished.id - 1]?.question === finished.question
      )
        outputs.set(finished.id - 1, finished);
    }
  }
  const queue = samples.entries().filter(([index]) => !outputs.has(index));
  await Promise.all(
    Array.from({ length: retry ? 1 : 4 }, async () => {
      for (const [index, sample] of queue) {
        const evidence = retrieval[index]?.evidence ?? [];
        const search = questions[index];
        const started = performance.now();
        let firstMs = 0;
        let raw = "";
        let failure: string | undefined;
        let sources: ReturnType<typeof citedSources> = [];
        try {
          if (http) {
            outputs.set(index, await http.run(sample));
            await checkpoint();
            console.log("Evaluadas " + outputs.size + "/" + samples.length);
            continue;
          }
          if (search?.needsLiveData || (!evidence.length && search?.isDocumental)) {
            raw = NO_ANSWER_SENTENCE;
          } else {
            const messages: ChatMessage[] = [
              { role: "system", content: manualSystem(evidence, false) },
            ];
            if (sample.previous) messages.push({ role: "user", content: sample.previous });
            if (evidence.length)
              messages.push({ role: "user", content: manualContext(evidence, [], 0) });
            messages.push({ role: "user", content: sample.question });
            for await (const delta of provider.streamResponse({
              messages,
              abortSignal: AbortSignal.timeout(65_000),
            })) {
              if (!firstMs && delta.trim()) firstMs = performance.now() - started;
              raw += delta;
            }
            sources = citedSources(raw, evidence);
          }
        } catch (error) {
          failure = error instanceof Error ? error.message : "Error de generación";
        }
        outputs.set(index, {
          answer: groundedAnswer(
            raw,
            evidence,
            Boolean(search?.isDocumental && evidence.length),
            true,
          ).trim(),
          sources,
          firstMs,
          generationMs: performance.now() - started,
          ...(failure ? { error: failure } : {}),
        });
        await checkpoint();
        console.log("Evaluadas " + outputs.size + "/" + samples.length);
      }
    }),
  );

  const cases = samples.map((sample, index) => ({
    ...sample,
    id: index + 1,
    matchesRetrieval: retrieval[index]?.match,
    mode: retrieval[index]?.mode,
    retrievalMs: retrieval[index]?.timings.total ?? 0,
    evidence: retrieval[index]?.evidence.map((hit) => ({
      source: hit.documentName,
      page: hit.page,
      score: hit.score,
    })),
    ...outputs.get(index),
  }));
  const durations = cases.filter(({ error }) => !error);
  if (http) {
    const source = durations
      .flatMap((item) => item.sources ?? [])
      .find((item) => item.kind === "manual");
    if (source) await http.verifySource(source);
  }
  const realGenerations = durations.filter(({ firstMs }) => (firstMs ?? 0) > 0);
  if (
    sealed &&
    ((await digestFile(indexFile)).checksum !== indexSha256 ||
      (await readPointer(root, "active")) !== generation)
  )
    throw new Error("La instantánea cambió durante la evaluación.");
  const results = {
    generation,
    inventoryHash,
    indexSha256,
    sampleSize: samples.length,
    sample: sampleFlag,
    model: providerStatus.model,
    cases,
    batchedQueryEmbeddingMs: embeddingBatchMs,
    timings: {
      localRetrieval: http ? null : percentiles(durations.map(({ retrievalMs }) => retrievalMs)),
      firstText: percentiles(
        realGenerations.map(({ retrievalMs, firstMs }) => retrievalMs + (firstMs ?? 0)),
      ),
      fullAnswer: percentiles(
        realGenerations.map(({ retrievalMs, generationMs }) => retrievalMs + (generationMs ?? 0)),
      ),
      generatedSamples: realGenerations.length,
    },
  };
  await saveReport(output, results);
  if (sealed) await rm(partial, { force: true });
  console.log(
    JSON.stringify(
      {
        output,
        generation,
        cases: cases.length,
        failures: cases.length - durations.length,
        ...results.timings,
      },
      null,
      2,
    ),
  );
  if (cases.length !== durations.length) process.exitCode = 1;
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : "La evaluación ha fallado.");
  process.exitCode = 1;
});
