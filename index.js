import express from 'express';
import mongoose from 'mongoose';
import clientesRoutes from './routes/clientesRoutes.js';
import productoRoutes from './routes/productoRoutes.js';

// conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis', {
  useNewUrlParser: true,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', clientesRoutes);
app.use('/', productoRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});