import mongoose from "mongoose";

const ReservaSchema = mongoose.Schema({
    numeroHuesped: {
        type: Number, 
        ref: 'Huesped', 
    },
    numeroHabitacion: {
        type: Number,
        ref: 'Habitacion',
    },
    fechaInicio: {
        type: Date,
    },
    fechaFin: {
        type: Date,
    },
    totalPago: {
        type: Number,
    }
});

const Reserva = mongoose.model('Fechas', ReservaSchema);
export default Reserva;
