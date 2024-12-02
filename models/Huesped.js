import mongoose from "mongoose";

const HuespedSchema = mongoose.Schema({
    numeroHabitacion:{
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    apellidos: {
        type: String,
        trim: true,
        required: true
    },
    email:{
        type: String,
        trim: true,
        required: true,
    },
    telefono:{
        type: Number,
        required: true
    }
})
const Huesped = mongoose.model('Huesped', HuespedSchema);
export default Huesped;