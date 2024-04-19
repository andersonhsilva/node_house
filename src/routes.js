// importa apenas a parte de rotas com o "Router" do nosso express
import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/upload";

import SessionController from "./controllers/SessionController";
import HouseController from "./controllers/HouseController";

const routes = new Router();
const upload = multer(uploadConfig);

routes.get('/', (req, res) => {
  return res.json({ server: "started... ok" });
});

routes.post('/session', SessionController.store);
routes.post('/house', upload.single('thumbnail'), HouseController.store); // single = unico arquivo ou array = para varios arquivos

// exporta todas as nossas rotas
export default routes;