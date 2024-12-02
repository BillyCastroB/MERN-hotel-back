import Habitacion from "../models/Habitacion.js";
export const habitacion = async (req, res)=>{
    try {
        console.log(req.body);
        const habitacion = new Habitacion(req.body);
        await habitacion.save();
        res.json(habitacion);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "algo falló"})
    }
}

