import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
export const conexion = async ()=>{
    try{
        mongoose.connect(process.env.DATA_BASE);
        console.log("Base de datos conectada");
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}