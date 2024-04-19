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
},
    {
        toJSON: {
            virtuals: true
        }
    });

// isso cria um campo virtual para o objeto, nao aceita o formato de funcao anonima por isso o function
HouseSchema.virtual('thumbnail_url').get(function () {
    return `http://127.0.0.1:3333/files/${this.thumbnail}`;
});

// exporta o model com seu schema
export default model('House', HouseSchema);