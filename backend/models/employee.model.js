const Sequelize = require('sequelize');
const sequelize = require('../db_config/db');
const employee = sequelize.define('employee_table', {
    emp_name: {
        allowNULL: false,
        type: Sequelize.STRING
    },
    emp_contact_no: {
        allowNULL: false,
        type: Sequelize.STRING
    },
    emp_role: {
        allowNULL: false,
        type: Sequelize.STRING
    },
    salary: {
        allowNULL: false,
        type: Sequelize.STRING
    },
    team: {
        allowNULL: false,
        type: Sequelize.STRING
    },
    created_at: {
        field: "created_at",
        type: Sequelize.DATE
    },
    updated_at: {
        field: "updated_at",
        type: Sequelize.DATE
    },
}, {
    freezeTableName: true,
    timestamps: false
}
);


module.exports = employee;