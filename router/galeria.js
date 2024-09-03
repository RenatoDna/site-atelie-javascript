import { Router } from "express";
import { obterTodosItensGaleria } from "../models/galeria.js";

const routerGaleria = Router();

routerGaleria.get("/api/galeria", async (req,res) =>{
    const galeria = await obterTodosItensGaleria();

    return res.status(200).json(galeria);
})

export{routerGaleria};