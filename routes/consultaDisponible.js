import express from 'express'
import { consultarDisponible } from '../controllers/disponibleController.js';
const router = express.Router();

router.get('/disponibilidad/:numero', consultarDisponible)

export default router;