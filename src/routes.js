// importa apenas a parte de rotas com o "Router" do nosso express
import { Router } from "express";
import SessionController from "./controllers/SessionController";

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ server: "started... ok" });
});

routes.post('/session', SessionController.store);

// exporta todas as nossas rotas
export default routes;