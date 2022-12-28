import express from 'express';
import { nuevoProducto } from '../controllers/productoController.js';
import upload from '../middlewares/subirImagen.js';

const router = express.Router();

router.post('/productos',
    upload.single('imagen'),
    nuevoProducto
)

export default router;