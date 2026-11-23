import { getEmbeddingProvider } from "../src/lib/ai/get-embedding-provider";
import type { EmbeddingProvider } from "../src/lib/ai/embedding-provider";
import {
  buildRetrievalQuestion,
  retrieveRelevantChunks,
} from "../src/lib/knowledge/retrieval-service";
import { cosineSimilarity } from "../src/lib/knowledge/vector-math";
import { closeDatabase } from "../src/server/database/client";
import { createKnowledgeRepository } from "../src/server/database/repositories/knowledge-repository";

const payroll = /GestionNomina|GuiaUsuarioNomina|Elementos_de_Nómina/i;
const ln4 = /Lenguaje_LN4/i;
const cases = [
  {
    name: "LN4 IF/ELSE",
    question: "¿Cómo se escribe una condición IF ELSE en LN4?",
    manual: ln4,
    pages: [33, 35, 36],
  },
  { name: "LN4 variable", question: "¿Cómo se declara una variable en LN4?", manual: ln4 },
  { name: "LN4 tipos", question: "¿Qué tipos de datos admite LN4?", manual: ln4 },
  { name: "Conceptos", question: "¿Qué es un concepto de nómina?", manual: payroll },
  {
    name: "Devengo",
    question: "¿Cómo se define un concepto de devengo en nómina?",
    manual: payroll,
  },
  { name: "Cálculo", question: "¿Cómo se calcula la nómina en PeopleNet?", manual: payroll },
  {
    name: "Seguimiento",
    question: "en la app de PeopleNet directamente",
    previous: "¿Cómo se configura una plantilla de consulta de nómina?",
    manual: /plantillas_consulta_nomina/i,
  },
  {
    name: "Identificador",
    question: "¿Dónde se utiliza la constante M4_NUMBER?",
    manual: /plantillas_consulta_nomina|Lenguaje_LN4|Arquitectura_Meta4Objects/i,
  },
  {
    name: "SAML",
    question: "¿Cómo se configura la autenticación Single Sign On con SAML?",
    manual: /Single_Sign_On_SAML/i,
  },
  {
    name: "XML",
    question: "¿Cómo se usa la Importación y Exportación XML?",
    manual: /Importación_Exportación_XML/i,
  },
  { name: "Venus", question: "¿Cuál es la temperatura de Venus?" },
  { name: "Ramen", question: "¿Cómo se prepara ramen vegetariano?" },
  { name: "Telescopio", question: "¿Cómo ajusto un telescopio ecuatorial?" },
  { name: "Música", question: "¿Quién compuso Las cuatro estaciones?" },
];

async function evaluate() {
  const repo = createKnowledgeRepository();
  const provider = getEmbeddingProvider();
  const useVectors = !process.argv.includes("--lexical");
  const minScore = Number(process.env.KB_MIN_SCORE ?? "0.55");
  const status = provider.getStatus();
  const results = [];
  for (const sample of cases) {
    const question = buildRetrievalQuestion(sample.question, sample.previous);
    const vectorsByQuery = new Map<string, number[][]>();
    const cachedProvider: EmbeddingProvider = {
      name: provider.name,
      getStatus: () => ({ ...status, configured: useVectors && status.configured }),
      async embed(texts, task, signal) {
        const key = JSON.stringify(texts);
        const cached = vectorsByQuery.get(key);
        if (cached) return cached;
        const vectors = await provider.embed(texts, task, signal);
        vectorsByQuery.set(key, vectors);
        return vectors;
      },
    };
    let legacy: { name: string; page: number }[] = [];
    const hasVectors = useVectors && status.model && repo.hasVectors(status.model);
    const [query] = hasVectors ? await cachedProvider.embed([sample.question], "query") : [];
    if (hasVectors && question !== sample.question) await cachedProvider.embed([question], "query");
    const start = performance.now();
    if (query && status.model) {
      const keywords = new Set(repo.searchFts(sample.question, 200).map(({ chunkId }) => chunkId));
      const ids = repo
        .getAllChunkVectors(status.model, query.length)
        .map(({ chunkId, embedding }) => ({
          chunkId,
          score: Math.min(
            1,
            cosineSimilarity(query, embedding) + (keywords.has(chunkId) ? 0.05 : 0),
          ),
        }))
        .filter(({ score }) => score >= minScore)
        .sort((left, right) => right.score - left.score)
        .slice(0, 6);
      legacy = repo
        .getChunksByIds(ids.map(({ chunkId }) => chunkId))
        .map(({ documentOriginalFileName, page }) => ({ name: documentOriginalFileName, page }));
    }
    const legacyMs = Math.round(performance.now() - start);
    const nextStart = performance.now();
    const ranked = await retrieveRelevantChunks(question, {
      repository: repo,
      minScore,
      embeddingProvider: cachedProvider,
    });
    const expected = (hits: readonly { name: string; page: number }[]) =>
      sample.manual
        ? hits.some(
            ({ name, page }) =>
              sample.manual?.test(name) && (!sample.pages || sample.pages.includes(page)),
          )
        : hits.length === 0;
    results.push({
      caso: sample.name,
      tipo: sample.manual ? "referencia" : "fuera de tema",
      antes: expected(legacy),
      ahora: expected(ranked.map(({ documentName, page }) => ({ name: documentName, page }))),
      msAntes: legacyMs,
      msAhora: Math.round(performance.now() - nextStart),
      fuentes: ranked
        .map(({ documentName, page }) => `${documentName.split("/").at(-1)}:${page}`)
        .join(", "),
    });
  }
  console.table(results.map(({ fuentes: _fuentes, ...result }) => result));
  for (const result of results.filter(({ ahora }) => !ahora))
    console.log(result.caso, result.fuentes);
  const positives = results.filter(({ tipo }) => tipo === "referencia");
  const negatives = results.filter(({ tipo }) => tipo === "fuera de tema");
  const median = (times: number[]) => times.sort((x, y) => x - y)[Math.floor(times.length / 2)];
  console.log(
    JSON.stringify({
      ...repo.getStatus(),
      vectors: repo.getAllChunkVectors().length,
      positives: positives.length,
      hitsBefore: positives.filter(({ antes }) => antes).length,
      hitsAfter: positives.filter(({ ahora }) => ahora).length,
      falsePositivesBefore: negatives.filter(({ antes }) => !antes).length,
      falsePositivesAfter: negatives.filter(({ ahora }) => !ahora).length,
      medianBeforeMs: median(results.map(({ msAntes }) => msAntes)),
      medianAfterMs: median(results.map(({ msAhora }) => msAhora)),
      latencyExcludesEmbeddingNetwork: true,
    }),
  );
}
void evaluate()
  .catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : "Error durante la evaluación.");
    process.exitCode = 1;
  })
  .finally(closeDatabase);
