import { Router } from "express";
import { obterTodosOsCursos } from "../models/cursos.js";

const routerCursos = Router();

routerCursos.get("/api/cursos", async (req,res) => {
    const cursos = await obterTodosOsCursos();

    return res.status(200).json(cursos);
});

export{routerCursos};