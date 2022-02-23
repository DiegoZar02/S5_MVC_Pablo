import express from "express";
import { ListadoProductos } from "../../../middlewares/Productos.mw.js";

export const ProductosRouter = express.Router();


ProductosRouter.get('/listado-productos', ListadoProductos)