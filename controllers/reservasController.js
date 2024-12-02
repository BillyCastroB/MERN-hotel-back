import Huesped from "../models/Huesped.js";

/* export const reservarHuesped = (req, res)=>{

} */

export const reservar = async (req, res)=>{
    const { nombre, apellidos, email, telefono } = req.body
    console.log(email);

    const existeHuesped = await Huesped.findOne({email});
    if(existeHuesped){
        const error = new Error("Huesped ya hospedado")
        return res.status(400).json({msg: error.message})
    }
    try {
        const huesped = new Huesped(req.body);
        const huespedGuardado = await huesped.save();
        console.log(huespedGuardado)
    } catch (error) {
        console.log(error);
    }
}