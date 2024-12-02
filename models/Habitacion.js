import mongoose from "mongoose";
const HabitacionSchema = mongoose.Schema({
    numero:{
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    precio: {
        type: Number,
        required: true,
    },
    capacidad:{
        type: Number,
        required: true
    },
    disponible: {
        type: Boolean,
        default: true
    }
})

const Habitacion = mongoose.model('Habitacion', HabitacionSchema);
export default Habitacion;

