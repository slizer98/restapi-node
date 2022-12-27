import express from 'express';
import clientesRoutes from './routes/clientesRoutes.js';
import mongoose from 'mongoose';

// conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis', {
  useNewUrlParser: true,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', clientesRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});