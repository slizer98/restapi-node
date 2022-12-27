import Clientes from "../models/Clientes.js";

const mostrarClientes = async (req, res, next) => {
    try {
        const clientes = await Clientes.find({});
        res.json(clientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

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


export {
    nuevoCliente,
    mostrarClientes
}