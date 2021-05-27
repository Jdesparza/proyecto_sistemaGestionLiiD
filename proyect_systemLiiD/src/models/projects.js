import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

import Staff_Projects from './staff_projects';

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

projects.belongsToMany(Staff_Projects, { through: 'ProjectProjectID', foreingKey: 'ProjectProjectID', sourceKey: 'projectID', onDelete: 'cascade', hooks: true });
Staff_Projects.belongsTo(projects, { foreingKey: 'ProjectProjectID', sourceKey: 'projectID', onDelete: 'cascade', hooks: true });

export default projects;