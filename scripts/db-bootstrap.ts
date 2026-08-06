import { bootstrapDatabase } from "../src/server/database/bootstrap";
import { closeDatabase, createDatabase } from "../src/server/database/client";

const database = createDatabase();
try {
  bootstrapDatabase(database);
} finally {
  closeDatabase();
}
