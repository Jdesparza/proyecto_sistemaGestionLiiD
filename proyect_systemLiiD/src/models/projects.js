import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const projects = sequelize.define('Projects', {
    projectID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    projectName: {
        type: Sequelize.TEXT
    },
    projectOwner: {
        type: Sequelize.TEXT
    },
    managerName: {
        type: Sequelize.TEXT
    },
    departaments: {
        type: Sequelize.TEXT
    },
    developers: {
        type: Sequelize.TEXT
    },
    states: {
        type: Sequelize.INTEGER
    },
    startDate: {
        type: Sequelize.DATE
    },
    finishDate: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

export default projects;