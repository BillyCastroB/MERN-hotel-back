import Huesped from "../models/Huesped.js"
import Fechas from '../models/Fechas.js'
import { main } from "./enviarEmail.js";
export const reservarHuesped = async (req, res)=>{
    try {
        const huesped = new Huesped(req.body);
        await huesped.save();
        res.json(huesped);
        main(req.body.email);
    } catch (error) {
        console.log(error)
        res.status(500).send("Error al reservar huésped");
    }
}

export const consultarHuesped = async (req, res)=>{
    try {
        const { id } = req.params; 
        const respuesta = await Huesped.find({ numeroHabitacion: id }); 
        res.json(respuesta);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al consultar los huespeds" });
    }
}

export const eliminarReservaCompleta = async (req, res) => {
  const { id } = req.params;
  console.log('ID recibido:', id);

  try {
      const resultadoFechas = await Fechas.deleteOne({ numeroHabitacion: id });
      const resultadoHuespedes = await Huesped.deleteOne({ numeroHabitacion: id });

      console.log('Resultados:', { resultadoFechas, resultadoHuespedes });

      if (resultadoFechas.deletedCount === 0 && resultadoHuespedes.deletedCount === 0) {
          return res.status(404).json({ message: 'No se encontraron datos para este número de habitación.' });
      }

      res.status(200).json({ message: 'Reserva eliminada exitosamente.' });
  } catch (error) {
      console.error('Error al eliminar la reserva:', error);
      res.status(500).json({ message: 'Error al eliminar la reserva.' });
  }
};


export const editarReservaCompleta = async (req, res) => {
  const { id } = req.params;
  const { datosHuesped, fechas } = req.body;

  try {
    // Validar si existe un huésped con ese número de habitación
    const huespedExistente = await Huesped.findOne({ numeroHabitacion: id });
    if (!huespedExistente) {
      return res.status(404).json({ msg: 'Huésped no encontrado' });
    }

    // Actualizar datos del huésped
    const huespedActualizado = await Huesped.findOneAndUpdate(
      { numeroHabitacion: id },
      {
        nombre: datosHuesped.nombre,
        apellidos: datosHuesped.apellidos,
        email: datosHuesped.email,
        telefono: datosHuesped.telefono,
      },
      { new: true } // Devuelve el documento actualizado
    );

    // Validar si existe una reservación con ese número de habitación
    const reservacionExistente = await Fechas.findOne({ numeroHabitacion: id });
    if (!reservacionExistente) {
      return res.status(404).json({ msg: 'Reservación no encontrada' });
    }

    // Actualizar fechas de la reservación
    const fechasActualizadas = await Fechas.findOneAndUpdate(
      { numeroHabitacion: id },
      {
        fechaInicio: fechas.fechaInicio,
        fechaFin: fechas.fechaFin,
        total: fechas.total, // Asegúrate de que `total` también se envíe en el cuerpo de la solicitud
      },
      { new: true } // Devuelve el documento actualizado
    );

    // Respuesta final
    res.json({
      msg: 'Reserva actualizada correctamente',
      huesped: huespedActualizado,
      fechas: fechasActualizadas,
    });
  } catch (error) {
    console.error('Error al actualizar reserva completa:', error);
    res.status(500).json({ msg: 'Error al actualizar la reserva completa', error });
  }
};