// importa apenas a parte de rotas com o "Router" do nosso express
import { Router } from "express";

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ ok: true });
});

// exporta todas as nossas rotas
export default routes;