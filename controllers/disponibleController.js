import Habitacion from "../models/Habitacion.js";

export const consultarDisponible = async (req, res) => {
  try {
    const { numero } = req.params; // Obtenemos el número desde los parámetros de la ruta
    const habitacion = await Habitacion.findOne({ numero: numero }); // Eliminamos la proyección para obtener todos los datos

    if (!habitacion) {
      return res.status(404).json({ msg: "Habitación no encontrada" });
    }

    res.json(habitacion); // Devolvemos todos los datos de la habitación
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Algo falló" });
  }
};
