import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('staff_administration', 'root', '59510215617525', {
    host: 'localhost',
    dialect: 'mysql'
  });

export default sequelize;