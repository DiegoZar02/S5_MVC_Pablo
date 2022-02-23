import {ProductosRouter} from "./endpoints/productos/productos.routes.js";
import { TestRouter } from "./endpoints/test/test.routes.js";

export const RoutesDeclarations = [
    {
        path: '/',
        router: [
            ProductosRouter,
            TestRouter
        ]
    }
]