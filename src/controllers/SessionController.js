import User from "../models/User";

// metodos: index, show, update, store, destroy
class SessionController {

    async store(req, res) {
        const { email } = req.body;

        // pesquisa se o usuario existe
        let user = await User.findOne({ email });

        // cadastra o usuario se ele nao existir
        if (!user) user = await User.create({ email })

        return res.json(user);
    }

}

export default new SessionController();
