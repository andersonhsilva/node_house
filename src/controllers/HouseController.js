import House from "../models/House";

// herda os metodos do model: index, show, update, store, destroy
class HouseController {

    async store(req, res) {
        
        const { user_id } = req.headers;
        const { filename } = req.file;
        const { description, price, location, status } = req.body;

        const house = await House.create({
            user: user_id,
            thumbnail: filename,
            description,
            price,
            location,
            status,
        });

        // console.log(req.body);
        // console.log(req.file);

        return res.json(house);
    }

}

export default new HouseController();
