import Pedidos from '../models/Pedidos.js';

const nuevoPedido = async (req, res) => {
    const pedido = new Pedidos(req.body);
    try {
        await pedido.save();
        res.status(201).send('Pedido creado correctamente');
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al crear el pedido');
    }
}

const mostrarPedidos = async (req, res) => {
    try {
        const pedidos = await Pedidos.find({}).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'productos'
        });
        res.status(200).json(pedidos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar los pedidos');
    }
}

const mostrarPedido = async (req, res) => {
    try {
        const pedido = await Pedidos.findById(req.params.id).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'productos'
        });
        if(!pedido) {
            return res.status(404).json({msg: 'El pedido no existe'});
        }
        res.status(200).json(pedido);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar el pedido');
    }
}

const actualizarPedido = async (req, res) => {
    try {
        let pedido = await Pedidos.findByIdAndUpdate({_id: req.params.id}, req.body, { new: true }).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'productos'
        });
        if(!pedido) {
            return res.status(404).json({msg: 'El pedido no existe'});
        }
        res.status(200).json(pedido);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el pedido');
    }
}

const eliminarPedido = async(req, res) => {
    try {
        const pedido = await Pedidos.findOneAndDelete({_id: req.params.id})
        if(!pedido) {
            return res.status(404).json({msg: 'El pedido no existe'});
        }
        res.status(200).json({msg: `El pedido ${pedido._id} ha sido eliminado`})
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el pedido');
    }
}

export {
    nuevoPedido,
    mostrarPedidos,
    mostrarPedido,
    actualizarPedido,
    eliminarPedido
}