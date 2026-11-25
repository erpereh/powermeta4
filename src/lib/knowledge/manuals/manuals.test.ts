import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { backup, DatabaseSync } from "node:sqlite";

import { PDFDocument } from "pdf-lib";
import { afterEach, describe, expect, it, vi } from "vitest";

import {
  activatePreparedKnowledge,
  exportKnowledge,
  importKnowledge,
  publishKnowledge,
} from "./bundle";
import {
  DIMENSIONS,
  EMBEDDING_MODEL,
  digestFile,
  indexPath,
  originalPath,
  readPointer,
  sha256,
  writePointer,
} from "./config";
import { embedTexts } from "./embedding";
import { citedSources, groundedAnswer } from "./grounding";
import { ingestCorpus } from "./ingestion";
import { hasBrokenPdfEncoding, redact } from "./layout";
import { retrieveManuals, searchQuestion, type ManualEvidence } from "./retrieve";
import {
  applyPageReviews,
  assertComplete,
  openIndex,
  pendingVectors,
  publishManual,
  saveVectors,
  writeMeta,
} from "./store";

const folders: string[] = [];

it("resuelve las referencias agrupadas y mantiene el respaldo exigido para figuras", () => {
  const evidence: ManualEvidence[] = [11, 12].map((page) => ({
    id: page,
    documentId: "delta",
    documentName: "GuiaDelta.pdf",
    title: "Guía Delta",
    release: "",
    language: "es",
    module: "",
    country: "",
    page,
    section: "",
    text: "Figura",
    score: 1,
  }));
  const answer = "Se generan partes con y sin baja médica. [[R1], [R2]]";
  expect(
    searchQuestion("En la figura del módulo Delta, ¿qué casos se incluyen?").isDocumental,
  ).toBe(true);
  expect(
    citedSources(answer, evidence).map((source) => source.kind === "manual" && source.page),
  ).toEqual([11, 12]);
  expect(groundedAnswer(answer, evidence, true, true)).toBe(
    "Se generan partes con y sin baja médica.",
  );
  expect(citedSources("Texto. [[R1, R99]]", evidence)).toHaveLength(1);
  expect(groundedAnswer("Texto. [[R99]]", evidence, true, true)).toMatch(
    /^No tengo información suficiente/,
  );
});

async function root() {
  const folder = await mkdtemp(path.join(os.tmpdir(), "powermeta4-rag-test-"));
  folders.push(folder);
  return folder;
}

afterEach(async () => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  for (const folder of folders.splice(0)) await rm(folder, { recursive: true, force: true });
});

function embeddingCredentials(prefix: string) {
  const credentials = Array.from({ length: 5 }, (_, index) => prefix + (index + 1));
  credentials.forEach((credential, index) => {
    vi.stubEnv("EMBEDDING_API_KEY" + (index ? index + 1 : ""), credential);
  });
  vi.stubEnv("EMBEDDING_BASE_URL", "https://openrouter.ai/api/v1/embeddings");
  vi.stubEnv("EMBEDDING_MODEL", EMBEDDING_MODEL);
  vi.stubEnv("EMBEDDING_DIMENSIONS", String(DIMENSIONS));
  return credentials;
}

describe("rotación de credenciales de OpenRouter", () => {
  it("avanza hasta la quinta clave y guarda una sola vez el lote pendiente", async () => {
    const folder = await root();
    const generation = "rotacion";
    const database = openIndex(folder, generation, true);
    try {
      publishManual(database, {
        source: "oficiales/Ejemplo.pdf",
        checksum: sha256("manual de prueba"),
        title: "Ejemplo",
        language: "es",
        release: "",
        format: "pdf",
        approved: true,
        pages: [{ page: 1, status: "text" }],
        passages: [
          { page: 1, section: "Cálculo", kind: "prose", text: "Parámetros del cálculo de nómina." },
        ],
      });
    } finally {
      database.close();
    }
    await writePointer(folder, "candidate", generation);
    const credentials = embeddingCredentials("rotacion-");
    const embedding = Buffer.alloc(DIMENSIONS * 4);
    embedding.writeFloatLE(1);
    const requests: string[] = [];
    const bodies: (BodyInit | null | undefined)[] = [];
    vi.stubGlobal(
      "fetch",
      vi.fn((url: string, init?: RequestInit) => {
        const key = new Headers(init?.headers).get("Authorization")?.slice(7) ?? "";
        const slot = credentials.indexOf(key) + 1;
        if (url.endsWith("/key")) {
          requests.push(`cuota ${slot}`);
          return Response.json({
            data: { free_model_daily_requests: { remaining: slot === 2 ? 0 : 1 } },
          });
        }
        requests.push(`lote ${slot}`);
        bodies.push(init?.body);
        return slot === 5
          ? Response.json({
              model: EMBEDDING_MODEL,
              data: [{ index: 0, embedding: embedding.toString("base64") }],
            })
          : Response.json(
              { error: { message: "Rate limit exceeded: free-models-per-day" } },
              { status: 429 },
            );
      }),
    );
    const options = {
      root: folder,
      source: folder,
      lexical: false,
      fresh: false,
      vectorsOnly: true,
      workers: 1,
      log: vi.fn(),
    };
    expect(await ingestCorpus(options)).toMatchObject({ vectorized: 1, vectorFailure: null });
    expect(await ingestCorpus(options)).toMatchObject({ vectorized: 1, vectorFailure: null });
    expect(requests).toEqual([
      "cuota 1",
      "lote 1",
      "cuota 2",
      "cuota 3",
      "lote 3",
      "cuota 4",
      "lote 4",
      "cuota 5",
      "lote 5",
    ]);
    expect(typeof bodies[0]).toBe("string");
    expect(new Set(bodies).size).toBe(1);
  });

  it.each([
    { status: 429, message: "Provider temporarily rate-limited the model", kind: "quota" },
    { status: 422, message: "Rejected by content safety screening", kind: "screened" },
  ])(
    "conserva los rechazos HTTP $status sin cambiar de clave",
    async ({ status, message, kind }) => {
      const folder = await root();
      embeddingCredentials(`rechazo-${status}-`);
      const fetchMock = vi.fn(() =>
        Response.json({ error: { message } }, { status, headers: { "Retry-After": "30" } }),
      );
      vi.stubGlobal("fetch", fetchMock);
      await expect(embedTexts(folder, ["Texto de prueba"], "query")).rejects.toMatchObject({
        kind,
      });
      expect(fetchMock).toHaveBeenCalledTimes(1);
    },
  );
});

describe("índice independiente de manuales", () => {
  it("conserva una revisión visual al volver a extraer el mismo PDF", async () => {
    const folder = await root();
    const database = openIndex(folder, "revision", true);
    try {
      const document = {
        source: "oficiales/Ejemplo.pdf",
        checksum: sha256("manual contrastado"),
        title: "Ejemplo",
        language: "es",
        release: "",
        format: "pdf" as const,
        approved: true,
      };
      publishManual(database, {
        ...document,
        pages: [{ page: 1, status: "review" }],
        passages: [],
      });
      applyPageReviews(database, [
        {
          sha256: document.checksum,
          page: 1,
          reason: "Transcripción verificada en el PDF.",
          text: "La opción requiere iniciar un nuevo ejercicio.",
          figure: true,
        },
      ]);
      publishManual(database, {
        ...document,
        pages: [{ page: 1, status: "text" }],
        passages: [{ page: 1, section: "Cabecera", kind: "prose", text: "Texto de la cabecera." }],
      });
      expect(pendingVectors(database, 2)).toHaveLength(1);
      expect(pendingVectors(database, 2)[0]?.input).toContain("iniciar un nuevo ejercicio");
      expect(database.prepare("SELECT status FROM pages").get()).toMatchObject({ status: "mixed" });
      expect(database.prepare("SELECT count(*) AS total FROM page_reviews").get()).toMatchObject({
        total: 1,
      });
    } finally {
      database.close();
    }
  });

  it("mantiene el progreso tras reabrir SQLite y traslada una generación verificada", async () => {
    const origin = await root();
    const target = await root();
    const evaluated = await root();
    const generation = "prueba";
    const source = "oficiales/configuracion/Ejemplo.pdf";
    const pdf = await PDFDocument.create();
    pdf.addPage();
    const body = await pdf.save();
    const checksum = sha256(body);
    const fingerprint = sha256("inventario de prueba");
    const database = openIndex(origin, generation, true);
    publishManual(database, {
      source,
      checksum,
      title: "Ejemplo nómina",
      language: "es",
      release: "",
      format: "pdf",
      approved: true,
      pages: [{ page: 1, status: "text" }],
      passages: [
        {
          page: 1,
          section: "Símbolos",
          kind: "table",
          text: "ARG_DIRECTION indica entrada y salida.",
        },
        {
          page: 1,
          section: "Cálculo",
          kind: "prose",
          text: "El cálculo incluye las incidencias autorizadas del periodo.",
        },
      ],
    });
    writeMeta(database, "inventoryHash", fingerprint);
    writeMeta(database, "inventoryCount", "1");
    const vector = new Float32Array(DIMENSIONS);
    vector[0] = 1;
    saveVectors(database, pendingVectors(database, 1), [vector]);
    database.close();

    const restarted = openIndex(origin, generation, true);
    expect(pendingVectors(restarted, 5)).toHaveLength(1);
    expect(() => assertComplete(restarted)).toThrow(/pendientes/);
    saveVectors(restarted, pendingVectors(restarted, 1), [vector]);
    expect(assertComplete(restarted)).toMatchObject({ pdfs: 1, vectorized: 2 });
    const snapshotPath = indexPath(evaluated, generation);
    await mkdir(path.dirname(snapshotPath), { recursive: true });
    await backup(restarted, snapshotPath);
    restarted.close();
    const snapshot = new DatabaseSync(snapshotPath);
    snapshot.exec("PRAGMA journal_mode = DELETE");
    snapshot.close();
    const { checksum: indexSha256 } = await digestFile(snapshotPath);

    await mkdir(path.dirname(originalPath(origin, checksum)), { recursive: true });
    await writeFile(originalPath(origin, checksum), body);
    await writePointer(origin, "candidate", generation);
    const evaluation = path.join(origin, "evaluation.json");
    const report = {
      generation,
      inventoryHash: fingerprint,
      indexSha256,
      sampleSize: 20,
      correct: 19,
      grounded: 14,
      insufficient: 5,
    };
    await writeFile(evaluation, JSON.stringify({ ...report, indexSha256: sha256("otro índice") }));
    await expect(publishKnowledge(origin, evaluation, evaluated)).rejects.toThrow(
      /huella del índice/,
    );
    await writeFile(evaluation, JSON.stringify(report));
    const prepared = await publishKnowledge(origin, evaluation, evaluated, false);
    expect(await readPointer(origin, "active")).toBeNull();
    expect((await digestFile(indexPath(origin, prepared.generation))).checksum).toBe(indexSha256);
    const archive = path.join(origin, "manuales.zip");
    await exportKnowledge(origin, archive, prepared.generation);
    const installed = await importKnowledge(target, archive);
    expect((await digestFile(indexPath(target, installed.generation))).checksum).toBe(indexSha256);
    await activatePreparedKnowledge(origin, prepared.generation);
    expect(await readPointer(origin, "active")).toBe(prepared.generation);
    const reopened = openIndex(target, installed.generation);
    try {
      expect(assertComplete(reopened)).toMatchObject({ pdfs: 1, vectorized: 2 });
    } finally {
      reopened.close();
    }
    expect(sha256(await readFile(originalPath(target, checksum)))).toBe(checksum);
    const result = await retrieveManuals("¿Qué indica ARG_DIRECTION?", {
      root: target,
      lexicalOnly: true,
    });
    expect(result.evidence[0]).toMatchObject({ documentName: source, page: 1 });

    const invalid = path.join(origin, "archivo-corrupto.zip");
    await writeFile(invalid, "corrupto");
    await expect(importKnowledge(target, invalid)).rejects.toThrow();
    expect(await readPointer(target, "active")).toBe(installed.generation);
  });

  it("redacta valores en autentificaciones de ejemplo de forma idempotente", () => {
    const original =
      'LDAP.BIND("cn=ejemplo", "password de ejemplo"); Password: "otro valor"; a@example.test';
    const revised = redact(original);
    expect(revised).not.toMatch(/cn=ejemplo|password de ejemplo|otro valor|a@example/);
    expect(redact(revised)).toEqual(revised);
  });

  it("detecta caracteres de control dentro de una palabra sin confundirlos con viñetas", () => {
    expect(hasBrokenPdfEncoding("8\u0085rhpv")).toBe(true);
    expect(hasBrokenPdfEncoding("\u0084 Selección de la sociedad")).toBe(false);
  });
});
