"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbconection_1 = __importDefault(require("../database/dbconection"));
const User = dbconection_1.default.define('employees', {
    staff_num: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING
    },
    possition: {
        type: sequelize_1.DataTypes.STRING
    },
    type_em: {
        type: sequelize_1.DataTypes.STRING
    },
    start_date: {
        type: sequelize_1.DataTypes.DATE
    },
    end_date: {
        type: sequelize_1.DataTypes.DATE
    },
    supervisor_name: {
        type: sequelize_1.DataTypes.STRING
    },
    salary: {
        type: sequelize_1.DataTypes.FLOAT
    },
    birthday: {
        type: sequelize_1.DataTypes.DATE
    },
    program: {
        type: sequelize_1.DataTypes.STRING
    },
    computer: {
        type: sequelize_1.DataTypes.STRING
    },
    phone: {
        type: sequelize_1.DataTypes.STRING
    },
    office: {
        type: sequelize_1.DataTypes.INTEGER
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = User;
