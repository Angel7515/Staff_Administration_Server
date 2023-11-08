"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('staff_administration', 'root', '59510215617525', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
