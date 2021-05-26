import Sequelize, { BelongsTo } from 'sequelize';
import {sequelize} from '../database/database';

import Licenses from './licenses';

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

Departments.hasMany(Licenses, { foreingKey: 'DepartmentDeptID', sourceKey: 'deptID' });
Licenses.belongsTo(Departments, { foreingKey: 'DepartmentDeptID', sourceKey: 'deptID' });

export default Departments;