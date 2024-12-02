import Fechas from '../models/Fechas.js'

//  almacenar fechas
export const reservacionFechas = async (req, res)=>{
    try {
        console.log(req.body);
        const fechas = new Fechas(req.body);
        await fechas.save();
        res.json(fechas);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "algo falló"})
    }
}


export const consultarReservas = async (req, res) => {
    try {
        const { id } = req.params; 
        const respuesta = await Fechas.find({ numeroHabitacion: id }); 
        res.json(respuesta);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al consultar las reservas" });
    }
};

// Controlador de eliminación de fechas de reserva por numeroHabitacion
export const eliminarFechasReserva = async (req, res) => {
    const { numeroHabitacion } = req.params;
  
    try {
      // Encuentra y elimina las fechas asociadas al numeroHabitacion
      const resultado = await Reserva.updateOne(
        { numeroHabitacion: numeroHabitacion },
        { $unset: { fechaInicio: "", fechaFin: "" } } // $unset elimina los campos de fecha
      );
  
      if (resultado.modifiedCount === 0) {
        return res.status(404).json({ message: 'No se encontraron fechas para este número de habitación.' });
      }
  
      res.status(200).json({ message: 'Fechas eliminadas exitosamente.' });
    } catch (error) {
      console.error("Error al eliminar fechas de reserva:", error);
      res.status(500).json({ message: 'Error al eliminar las fechas.' });
    }
};
  