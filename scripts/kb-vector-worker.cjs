const { DatabaseSync } = require("node:sqlite");
const { parentPort, workerData } = require("node:worker_threads");

const width = workerData.dimensions;
const database = new DatabaseSync(workerData.file, {
  readOnly: true,
  allowExtension: false,
  timeout: 5000,
});
database.exec("PRAGMA trusted_schema = OFF");
const { count } = database.prepare("SELECT count(*) AS count FROM vectors").get();
const vectors = new Float32Array(count * width);
const hashes = [];
for (const { hash, embedding } of database
  .prepare("SELECT hash, embedding FROM vectors ORDER BY rowid")
  .iterate()) {
  const aligned = embedding.byteOffset % 4 === 0 ? embedding : new Uint8Array(embedding);
  const values = new Float32Array(aligned.buffer, aligned.byteOffset, width);
  vectors.set(values, hashes.length * width);
  hashes.push(hash);
}
database.close();

parentPort.on("message", ({ id, query, top }) => {
  const ranked = [];
  for (let row = 0; row < hashes.length; row += 1) {
    const offset = row * width;
    let score = 0;
    for (let column = 0; column < width; column += 1) {
      score += query[column] * vectors[offset + column];
    }
    if (ranked.length === top && score <= ranked.at(-1).score) continue;
    let position = ranked.length;
    while (position > 0 && ranked[position - 1].score < score) position -= 1;
    ranked.splice(position, 0, { hash: hashes[row], score });
    if (ranked.length > top) ranked.pop();
  }
  parentPort.postMessage({ id, ranked });
});
