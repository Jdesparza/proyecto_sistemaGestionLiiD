import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const Staff_projects = sequelize.define('Staff_Projects', {
    staff_ProjectID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    StaffStaffID: {
        type: Sequelize.INTEGER
    },
    ProjectProjectID: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});


export default Staff_projects;