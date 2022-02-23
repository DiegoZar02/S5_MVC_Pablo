import express from "express";
import {environment} from "../environments/environment.js";
import Routes from "../routes/Routes.js";

export let WEB_SERVER;

export default class Server {
    constructor() {
        this.WebServer();
    }

    WebServer() {
        WEB_SERVER = express();
        this.LoadRoutes();
        this.InitializePort();
    }

    LoadRoutes() {
        const routes = new Routes();
    }

    InitializePort() {
        WEB_SERVER.listen(environment.PORT, environment.HOST, () => {
            console.log(`Conectado al puerto ${environment.PORT}`);
            console.log(`Host: ${environment.HOST}`)
        });
    }
}