import "dotenv/config";
import express from "express";
import router from "./router";
import { connectDB } from "./config/db";

import { corsConfig } from "./config/cors";
import cors from "cors";

const server = express(); // creando instancia de express
connectDB(); // llamado a funcion de conecciona DB

server.use(cors(corsConfig)); // Cors
server.use(express.json()); // leer datos de formularios
server.use("/", router);

export default server;
