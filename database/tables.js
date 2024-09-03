import { dbPromise } from "./bancosql.js";

async function criarTabelas(){
    const db = await dbPromise;
    await db.run(
        `CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        sobrenome TEXT NOT NULL,
        telefone TEXT NOT NULL,
        endereco TEXT,
        senha TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
        );`
    )

    await db.run(
        `CREATE TABLE IF NOT EXISTS galeria(
        id TEXT PRIMARY KEY,
        img TEXT,
        pintor TEXT,
        descricao TEXT
        )
        `
    )
    await db.run(
        `CREATE TABLE IF NOT EXISTS cursos(
        id TEXT PRIMARY KEY,
        img TEXT,
        titulo TEXT,
        descricao TEXT,
        conteudo TEXT,
        duracao TEXT,
        valor REAL
        )
        `
    )
}

criarTabelas()