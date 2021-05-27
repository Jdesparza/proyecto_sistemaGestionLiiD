import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

import staff_projects from './staff_projects';

const Staffs = sequelize.define('Staffs', {
    staffID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.TEXT
    },
    career: {
        type: Sequelize.TEXT
    },
    semester: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    photo: {
        type: Sequelize.TEXT
    },
    scholarship: {
        type: Sequelize.BOOLEAN
    },
    rol: {
        type: Sequelize.TEXT
    },
    phone: {
        type: Sequelize.TEXT
    },
    joinDate: {
        type: Sequelize.DATE
    },
    finishDate: {
        type: Sequelize.DATE
    },
    DepartmentDeptID: {
        type: Sequelize.INTEGER
    }

}, {
    timestamps: false
});

Staffs.hasMany(staff_projects, { foreingKey: 'StaffStaffID', sourceKey: 'staffID' });
staff_projects.belongsTo(Staffs, { foreingKey: 'StaffStaffID', sourceKey: 'staffID' });

export default Staffs;