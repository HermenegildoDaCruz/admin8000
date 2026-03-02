import Database from "better-sqlite3";

const dbFile = "database.sqlite";
const globalDb = globalThis

const db = globalDb.sqlite || new Database(dbFile,
  //  { verbose: console.log }
  );

if (process.env.NODE_ENV !== "production") {
  globalDb.sqlite = db;
}

export default db;