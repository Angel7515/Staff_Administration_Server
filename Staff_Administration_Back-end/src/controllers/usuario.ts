import { Request, Response } from 'express';
import User from '../models/user';
import { error } from 'console';

// CRUD operations (preconfiguration)
export const getUsers = async (req: Request, res: Response) => {
    const listUsers = await User.findAll()
    res.json(listUsers)
}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (user) {
        res.json(user)
    } else {
        res.status(404).json({
            msg: `No existe el usuario con el id ${id}`
        })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
        res.status(404).json({
            msg: `No existe el usuario con el id ${id}`
        })
    } else {
        await user.destroy();
        res.json({
            msg: 'Usuario eliminado con exito! '
        })
    }
}

export const postUser = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await User.create(body);

        res.json({
            msg: 'Usuario Agregado con exito! '
        })
    } catch {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error !'
        })
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const user = await User.findByPk(id);

        if (user) {
            await user.update(body);
            res.json({
                msg: 'El Usuario fue actualizado con exito'
            })
        } else {
            res.status(404).json({
                msg: 'No existe el Usuario'
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error !'
        })
    }
}