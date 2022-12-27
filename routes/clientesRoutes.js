import express from 'express';
import { mostrarCliente, mostrarClientes, nuevoCliente, actualizarCliente, eliminarCliente } from '../controllers/clienteController.js';

const router = express.Router();

router.get('/clientes', mostrarClientes)
router.get('/clientes/:id', mostrarCliente)
router.post('/clientes', nuevoCliente)
router.put('/clientes/:id', actualizarCliente)
router.delete('/clientes/:id', eliminarCliente)


export default router;