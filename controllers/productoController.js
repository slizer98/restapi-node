import Productos from '../models/Productos.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { unlink } from 'node:fs/promises'

const nuevoProducto = async (req, res) => {
    const producto = new Productos(req.body);
    try {
        if(req.file.filename) {
            const { filename } = req.file;
            producto.imagen = filename;
        }
        await producto.save();
        res.status(201).json({message: 'Producto creado correctamente'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al crear el producto');
    }
}

const mostrarProductos = async (req, res) => {
    try {
        const productos = await Productos.find({});
        res.json({productos});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar los productos');
    }
}

const mostrarProducto = async (req, res) => {
    try {
        const producto = await Productos.findById(req.params.id);
        if(!producto) {
            return res.status(404).json({message: 'Producto no encontrado'});
        }
        res.json({producto});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar los productos');
    }
}

const actualizarProducto = async (req, res) => {
    try {
        const producto = await Productos.findById(req.params.id);
        let nuevoProducto = req.body;
        if(!producto) {
            return res.status(404).json({message: 'Producto no encontrado'});
        }
        if(req.file) {
            const { filename } = req.file;
            nuevoProducto.imagen = filename;
        } else {
            nuevoProducto.imagen = producto.imagen;
        }
        let productoActualizado = await Productos.findOneAndUpdate({_id: req.params.id}, nuevoProducto, {new: true});
        res.json({productoActualizado});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el producto');
    }
}

const eliminarProducto = async (req, res) => {
    try {
        const producto = await Productos.findById(req.params.id);
        if(!producto) {
            return res.status(404).json({message: 'Producto no encontrado'});
        }
        
        const __filname = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filname);

        // Eliminar la imagen del servidor
        unlink(path.join(__dirname, `../uploads/${producto.imagen}`));
        await Productos.findOneAndDelete({_id: req.params.id});
        res.json({message: 'Producto eliminado correctamente'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el producto');
    }
}

export {
    nuevoProducto,
    mostrarProductos,
    mostrarProducto,
    actualizarProducto,
    eliminarProducto
}