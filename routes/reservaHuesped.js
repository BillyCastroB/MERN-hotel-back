import express from 'express'
import { reservarHuesped, consultarHuesped, eliminarReservaCompleta, editarReservaCompleta} from '../controllers/reservaHuespedController.js';
const router = express.Router();

router.post('/huesped', reservarHuesped);
router.get('/huesped/:id', consultarHuesped);
router.delete('/huesped/completa/:id', eliminarReservaCompleta );
router.put('/huesped/completa/:id', editarReservaCompleta );

export default router;