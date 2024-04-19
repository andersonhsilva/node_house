// importa apenas esses dois objetos do mangoosse
import { Schema, model } from "mongoose";

const HouseSchema = new Schema({
    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

// exporta o model de usuario com seu schema
export default model('User', HouseSchema);