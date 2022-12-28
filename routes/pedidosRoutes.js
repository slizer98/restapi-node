import express from 'express';
import { actualizarPedido, eliminarPedido, mostrarPedidos, nuevoPedido } from '../controllers/pedidosController.js';

const router = express.Router();

router.post('/pedidos', nuevoPedido)
router.get('/pedidos', mostrarPedidos)
router.get('/pedidos/:id', mostrarPedidos)
router.put('/pedidos/:id', actualizarPedido)
router.delete('/pedidos/:id', eliminarPedido)

export default router;