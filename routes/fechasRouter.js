import express from 'express'
import { reservacionFechas, consultarReservas } from '../controllers/fechasController.js';
const router =  express.Router();

router.post('/fechas', reservacionFechas);
router.get('/fechas/:id', consultarReservas);

export default router;