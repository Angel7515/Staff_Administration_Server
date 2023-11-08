import { DataTypes } from 'sequelize';
import db from '../database/dbconection';

const User = db.define('employees', {
    staff_num:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    possition: {
        type: DataTypes.STRING
    },
    type_em: {
        type: DataTypes.STRING
    },
    start_date: {
        type: DataTypes.DATE
    },
    end_date: { 
        type: DataTypes.DATE
    },
    supervisor_name: {
        type: DataTypes.STRING
    },
    salary: {
        type: DataTypes.FLOAT
    },
    birthday: {
        type: DataTypes.DATE
    },
    program: {
        type: DataTypes.STRING
    },
    computer: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    office: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    }
},{
    createdAt: false,
    updatedAt: false
});

export default User;