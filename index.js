import express from 'express';
import mongoose from 'mongoose';
import clientesRoutes from './routes/clientesRoutes.js';
import productoRoutes from './routes/productoRoutes.js';
import pedidosRoutes from './routes/pedidosRoutes.js';
import cors from 'cors';

// conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis', {
  useNewUrlParser: true,
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', clientesRoutes);
app.use('/', productoRoutes);
app.use('/', pedidosRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});