import multer from "multer";
import path from "path";

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'), // nao colocamos as barra por conta dos direfentes formato dependendo do sistema operacional assim o path gerencia as mesmas para o diretorio
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${ext}`)
        },
    })
}