import { json } from "express";
import Clientes from "../models/Clientes.js";

const nuevoCliente = async (req, res, next) => {
    const cliente = new Clientes(req.body);

    try {
        await cliente.save();
        res.json({ message: 'El cliente se agrego correctamente!' });
    } catch (error) {
        console.log(error);
        next();
    }
}


const mostrarClientes = async (req, res, next) => {
    try {
        const clientes = await Clientes.find({});
        res.json(clientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

const mostrarCliente = async (req, res, next) => {
    const cliente = await Clientes.findById(req.params.id);
    if (!cliente) {
        return res.json({ message: 'Ese cliente no existe' });
    }
    res.json(cliente);
}

const actualizarCliente = async (req, res) => {
    try {
        const cliente = await Clientes.findByIdAndUpdate({_id: req.params.id}, 
            req.body,
            {new: true}
        )
        if(!cliente) {
            return res.json({message: 'El cliente no existe'})
        }
        res.json(cliente)
    } catch (error) {
        console.log(error);
    }
}

const eliminarCliente = async(req, res) => {
    try {   
        const cliente = await Clientes.findByIdAndDelete({_id: req.params.id});
        if(!cliente) {
            return res.json({message: 'El cliente no existe'})
        }
        res.json({message: `El cliente ${cliente.nombre} ${cliente.apellido} se ha eliminado`})
    } catch (error) {
        console.log(error)
    }

}


export {
    nuevoCliente,
    mostrarCliente,
    mostrarClientes,
    actualizarCliente,
    eliminarCliente
}