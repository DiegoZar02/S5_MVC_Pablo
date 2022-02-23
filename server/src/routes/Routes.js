import { WEB_SERVER } from "../server/Server.js";
import {RoutesDeclarations} from "./routes.index.js";

export default class Routes {
    constructor() {
        this.LoadRoutes();
    }
    LoadRoutes() {
        RoutesDeclarations.forEach(rd => {
            WEB_SERVER.use(rd.path, rd.router);
        });

        this.Load404();
    }
    Load404() {
        WEB_SERVER.use('*', (req, res) => {
            res.status(404).send({
                msg: 'No encontrado'
            });
        });
    }
}