import express from "express";
import routes from "./routes";

class App {

  constructor() {

    // cria uma variavel de atributo em js chamada server
    this.server = express();

    // chama nossos metodos da class app
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

}

// exporta a class app atraves de uma nova instacia chamando a variavel de tatributo server
export default new App().server;
