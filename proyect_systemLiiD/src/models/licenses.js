import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const Licenses = sequelize.define('Licenses', {
    licenseID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    deptOwner: {
        type: Sequelize.TEXT
    },
    licenseType: {
        type: Sequelize.TEXT
    },
    licenseName: {
        type: Sequelize.TEXT
    },
    credentials: {
        type: Sequelize.BLOB
    },
    registerDate: {
        type: Sequelize.DATE
    },
    finishDate: {
        type: Sequelize.DATE
    },
    datails: {
        type: Sequelize.BLOB
    },
    DepartmentDeptID: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

export default Licenses;