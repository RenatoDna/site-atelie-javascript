import {dbPromise} from "../database/bancosql.js";

async function obterTodosItensGaleria() {
    const db = await dbPromise;
    const gallery = await db.all("SELECT * FROM galeria;");

    return gallery;
}

export{obterTodosItensGaleria};