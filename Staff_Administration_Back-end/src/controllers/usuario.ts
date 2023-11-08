import { Request, Response } from 'express';

// CRUD operations (preconfiguration)
export const getUsers = (req: Request, res: Response) => {
    res.json({
        msg: 'get users'
    })
}

export const getUser = (req: Request, res:Response) => {
    res.json({
        msg: 'get only one user',
        id: req.params.id
    })
}

export const deleteUser = (req:Request, res:Response) => {
    res.json({
        msg: 'delete user',
        id: req.params.id
    })
}

export const postUser = (req:Request, res:Response) => {
    const { body } = req;
    res.json({
        msg:'create User',
        body
    })
}

export const updateUser = (req:Request, res:Response) => {
    const { body } = req;
    res.json({
        msg:'update User',
        id: req.params.id,
        body
    })
}