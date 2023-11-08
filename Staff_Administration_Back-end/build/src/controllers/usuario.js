"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.postUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
// CRUD operations (preconfiguration)
const getUsers = (req, res) => {
    res.json({
        msg: 'get users'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    res.json({
        msg: 'get only one user',
        id: req.params.id
    });
};
exports.getUser = getUser;
const deleteUser = (req, res) => {
    res.json({
        msg: 'delete user',
        id: req.params.id
    });
};
exports.deleteUser = deleteUser;
const postUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'create User',
        body
    });
};
exports.postUser = postUser;
const updateUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'update User',
        id: req.params.id,
        body
    });
};
exports.updateUser = updateUser;
