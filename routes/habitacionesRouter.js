import express from 'express'
import { habitacion } from '../controllers/habitacionController.js';
const router = express.Router();


router.post('/habitacion', habitacion);

export default router;