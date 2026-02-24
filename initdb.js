const Database = require('better-sqlite3');
const path = require('path');

// location of the sqlite file.  You can change this as needed.
const dbFile = path.join(__dirname, 'data.sqlite');

// open (or create) the database
const db = new Database(dbFile);

// make sure foreign keys are enforced
db.pragma('foreign_keys = ON');

// initialize schema
const schema = `
-- departments
CREATE TABLE IF NOT EXISTS Departamento (
  id_departamento   INTEGER PRIMARY KEY AUTOINCREMENT,
  nome              TEXT NOT NULL,
  descricao         TEXT,
  email             TEXT
);

-- users
CREATE TABLE IF NOT EXISTS Utilizador (
  id_utilizador     INTEGER PRIMARY KEY AUTOINCREMENT,
  senha             TEXT NOT NULL,
  nivel_acesso      INTEGER NOT NULL DEFAULT 0,
  id_departamento   INTEGER,
  FOREIGN KEY (id_departamento) REFERENCES Departamento(id_departamento)
);

-- categories
CREATE TABLE IF NOT EXISTS Categoria (
  id_categoria      INTEGER PRIMARY KEY AUTOINCREMENT,
  nome_categoria    TEXT NOT NULL
);

-- documents
CREATE TABLE IF NOT EXISTS Documento (
  id_documento      INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo            TEXT NOT NULL,
  descricao         TEXT NOT NULL,
  data_criacao      TEXT NOT NULL DEFAULT (datetime('now')),
  data_actualizacao TEXT,
  link              TEXT,          -- url to file stored in S3
  id_categoria      INTEGER,
  id_utilizador     INTEGER,
  FOREIGN KEY (id_categoria) REFERENCES Categoria(id_categoria),
  FOREIGN KEY (id_utilizador) REFERENCES Utilizador(id_utilizador)
);

-- states for requests
CREATE TABLE IF NOT EXISTS Estado (
  id_estado         INTEGER PRIMARY KEY AUTOINCREMENT,
  nome_estado       TEXT NOT NULL
);

-- requests
CREATE TABLE IF NOT EXISTS Pedido (
  id_pedido         INTEGER PRIMARY KEY AUTOINCREMENT,
  data_criacao      TEXT NOT NULL DEFAULT (datetime('now')),
  descricao         TEXT,
  id_documento      INTEGER NOT NULL,
  id_departamento   INTEGER NOT NULL,
  id_estado         INTEGER NOT NULL,
  FOREIGN KEY (id_documento)   REFERENCES Documento(id_documento),
  FOREIGN KEY (id_departamento) REFERENCES Departamento(id_departamento),
  FOREIGN KEY (id_estado)      REFERENCES Estado(id_estado)
);

-- archive
CREATE TABLE IF NOT EXISTS Arquivo (
  id_arquivo        INTEGER PRIMARY KEY AUTOINCREMENT,
  data_arquivamento TEXT NOT NULL DEFAULT (datetime('now')),
  observacao        TEXT,
  id_documento      INTEGER UNIQUE,
  FOREIGN KEY (id_documento) REFERENCES Documento(id_documento)
);
`;

// run the schema creation
db.exec(schema);

// seed default states if they do not exist
const insertState = db.prepare('INSERT OR IGNORE INTO Estado (nome_estado) VALUES (?)');
['Pendente', 'Aprovado', 'Rejeitado'].forEach(state => insertState.run(state));

console.log('SQLite database initialized at', dbFile);

// export the database connection for other modules
module.exports = db;
