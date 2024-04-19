import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import path from "path";

class App {

  constructor() {

    // cria uma variavel de atributo em js chamada server
    this.server = express();

    // conecta ao banco de dados mongodb que fica em nuvel de forma gratuita ate 500mb
    mongoose.connect('mongodb+srv://andersonhsilva:VfbqHHMLWaDmo5MV@nodehouse.jclpofy.mongodb.net/?retryWrites=true&w=majority&appName=nodeHouse');

    // chama nossos metodos da class app
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // cria uma nova rota "files" na minha middleware que direciona para a pasta uploads na raiz do projeto
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads')) // sai da pasta src e vai para a raiz ao encontro da pasta uploads
    );

    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

}

// exporta a class app atraves de uma nova instacia chamando a variavel de tatributo server
export default new App().server;
