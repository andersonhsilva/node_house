// importa apenas esses dois objetos do mangoosse
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email: String,
});

// exporta o model com seu schema
export default model('User', UserSchema);