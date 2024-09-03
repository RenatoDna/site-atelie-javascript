import express from "express";
import {routeUsuario} from "./router/users.js";
import { routerGaleria } from "./router/galeria.js";
import { routerCursos } from "./router/cursos.js";

const app = express();

app.use(express.json());

app.use(express.static('public'));
app.use(routeUsuario);
app.use(routerGaleria);
app.use(routerCursos);

app.listen(3000, ()=> console.log("Servidor executando na porta 3000."));