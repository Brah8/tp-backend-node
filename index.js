console.log("Servidor iniciado correctamente");


import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import productsRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());


app.use(bodyParser.json());

app.use('/api/products', productsRoutes);
app.use('/auth', authRoutes);



app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});


app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});


app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
