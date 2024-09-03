import { dbPromise } from "../database/bancosql.js";

async function obterTodosOsCursos(){
    const db = await dbPromise;
    const cursos = await db.all('SELECT * FROM cursos;');

    return cursos;
}

export {obterTodosOsCursos};