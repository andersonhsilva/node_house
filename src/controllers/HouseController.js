import User from "../models/User";

// metodos: index, show, update, store, destroy
class HouseController {

    async store(req, res) {
        
        console.log(req.body);
        console.log(req.file);

        return res.json({ "house": true });
    }

}

export default new HouseController();
