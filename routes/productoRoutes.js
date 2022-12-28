import express from 'express';
import { mostrarProductos, mostrarProducto, nuevoProducto, actualizarProducto, eliminarProducto } from '../controllers/productoController.js';
import upload from '../middlewares/subirImagen.js';

const router = express.Router();

router.post('/productos',
    upload.single('imagen'),
    nuevoProducto
)
router.get('/productos', mostrarProductos)
router.get('/productos/:id', mostrarProducto)
router.put('/productos/:id', upload.single('imagen'), actualizarProducto )
router.delete('/productos/:id', eliminarProducto)

export default router;