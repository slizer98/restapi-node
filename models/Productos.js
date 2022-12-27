import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productosSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
    },
    precio: {
        type: Number,
    },
    imagen: {
        type: String,
    }
});

export default mongoose.model('productos', productosSchema);