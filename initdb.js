import Database from "better-sqlite3";

const dbFile = "database.sqlite";

const db = new Database(dbFile,
  //  { verbose: console.log }
  );

db.pragma("foreign_keys = ON");

const schema = `
-- departments
CREATE TABLE IF NOT EXISTS Department (
  id_department     INTEGER PRIMARY KEY AUTOINCREMENT,
  name              TEXT NOT NULL,
  description       TEXT,
  email             TEXT
);

-- users
CREATE TABLE IF NOT EXISTS User (
  id_user           INTEGER PRIMARY KEY AUTOINCREMENT,
  password          TEXT NOT NULL,
  access_level      INTEGER NOT NULL DEFAULT 0,
  id_department     INTEGER,
  FOREIGN KEY (id_department) REFERENCES Department(id_department)
);

-- categories
CREATE TABLE IF NOT EXISTS Category (
  id_category       INTEGER PRIMARY KEY AUTOINCREMENT,
  category_name     TEXT NOT NULL
);

-- documents
CREATE TABLE IF NOT EXISTS Document (
  id_document       INTEGER PRIMARY KEY AUTOINCREMENT,
  title             TEXT NOT NULL,
  description       TEXT NOT NULL,
  created_at        TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at        TEXT,
  link              TEXT,          -- url to file stored in S3 or public folder
  id_category       INTEGER,
  id_user           INTEGER,
  FOREIGN KEY (id_category) REFERENCES Category(id_category),
  FOREIGN KEY (id_user) REFERENCES User(id_user)
);

-- states for requests
CREATE TABLE IF NOT EXISTS Status (
  id_status         INTEGER PRIMARY KEY AUTOINCREMENT,
  status_name       TEXT NOT NULL
);

-- requests
CREATE TABLE IF NOT EXISTS Request (
  id_request        INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at        TEXT NOT NULL DEFAULT (datetime('now')),
  description       TEXT,
  id_document       INTEGER NOT NULL,
  id_department     INTEGER NOT NULL,
  id_status         INTEGER NOT NULL,
  FOREIGN KEY (id_document)   REFERENCES Document(id_document),
  FOREIGN KEY (id_department) REFERENCES Department(id_department),
  FOREIGN KEY (id_status)     REFERENCES Status(id_status)
);

-- archive
CREATE TABLE IF NOT EXISTS Archive (
  id_archive        INTEGER PRIMARY KEY AUTOINCREMENT,
  archived_at       TEXT NOT NULL DEFAULT (datetime('now')),
  observation       TEXT,
  id_document       INTEGER UNIQUE,
  FOREIGN KEY (id_document) REFERENCES Document(id_document)
);
`;


db.exec(schema);

const insertStatus = db.prepare(
  "INSERT OR IGNORE INTO Status (status_name) VALUES (?)",
);
["Pending", "Approved", "Rejected"].forEach((status) =>
  insertStatus.run(status),
);

const insert = db.prepare("INSERT INTO Category (category_name) VALUES (?)");
const insertMany = db.transaction((categories) => {
  for (const category of categories) insert.run(category);
});

db.prepare("DELETE FROM Category").run();

insertMany(["FINANCEIRO".toUpperCase(), "RECURSOS HUMANOS".toUpperCase()]);

console.log("SQLite database initialized at", dbFile);

export default db;

// // Add search field to documents. search_field to help find them
// db.prepare('ALTER TABLE Document ADD COLUMN search_field TEXT NOT NULL').run();
