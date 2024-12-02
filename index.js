import express from 'express';
import { conexion } from './db/conexion.js';
import habitacionRouter from './routes/habitacionesRouter.js';
import loginRouter from './routes/loginRouter.js'
import fechasHuesped from './routes/fechasRouter.js'
import reservaHuesped from './routes/reservaHuesped.js'
import consultarDisponible from './routes/consultaDisponible.js';
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors());
const PORT = process.env.PORT || 4000;

conexion();

app.listen(PORT, ()=>{
    console.log(`servidor funcionando en el puerto ${PORT}`)
});

app.use('/reservar', habitacionRouter);
app.use('/reserva', reservaHuesped);
app.use('/reservacion', fechasHuesped);
app.use('/login', loginRouter);
app.use('/habitacion', consultarDisponible);

app.use('/panel', (req, res)=>{
    res.send('desde panel');
})
