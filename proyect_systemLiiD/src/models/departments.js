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

Departments.hasMany(Licenses, { foreingKey: 'DepartmentDeptID', sourceKey: 'deptID' });
Licenses.belongsTo(Departments, { foreingKey: 'DepartmentDeptID', sourceKey: 'deptID' });

Departments.hasMany(Staffs, { foreingKey: 'DepartmentDeptID', sourceKey: 'deptID' });
Staffs.belongsTo(Departments, { foreingKey: 'DepartmentDeptID', sourceKey: 'deptID' });

export default Departments;