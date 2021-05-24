import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const Departments = sequelize.define('Departments', {
    deptID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    deptName: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

export default Departments;