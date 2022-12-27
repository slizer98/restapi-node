import Productos from '../models/Productos.js';

const nuevoProducto = async (req, res) => {
    const producto = new Productos(req.body);
    try {
        await producto.save();
        res.status(201).json({message: 'Producto creado correctamente'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al crear el producto');
    }
}

export {
    nuevoProducto
}