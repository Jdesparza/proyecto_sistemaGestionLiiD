import Sequelize, { BelongsTo } from 'sequelize';
import {sequelize} from '../database/database';

import Licenses from './licenses';
import Staffs from './staffs';

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

Departments.hasMany(Licenses, { foreingKey: 'DepartmentDeptID', sourceKey: 'deptID', onDelete: 'cascade', hooks: true });
Licenses.belongsTo(Departments, { foreingKey: 'DepartmentDeptID', sourceKey: 'deptID', onDelete: 'cascade', hooks: true });

Departments.hasMany(Staffs, { foreingKey: 'DepartmentDeptID', sourceKey: 'deptID', onDelete: 'cascade', hooks: true });
Staffs.belongsTo(Departments, { foreingKey: 'DepartmentDeptID', sourceKey: 'deptID', onDelete: 'cascade', hooks: true });

export default Departments;