import express from 'express';
import { mostrarClientes, nuevoCliente } from '../controllers/clienteController.js';

const router = express.Router();

router.get('/clientes', mostrarClientes)
router.post('/clientes', nuevoCliente)

export default router;