import express from 'express';
import { nuevoProducto } from '../controllers/productoController.js';

const router = express.Router();

router.post('/productos', nuevoProducto)

export default router;