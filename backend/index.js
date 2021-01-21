const express = require('express');
const sequelize = require("./db_config/db");
const cors = require('cors');
const app = express();
const port = 7000;
const employee = require('../backend/models/employee.model');
app.use(cors());
app.use(express.json());


sequelize
    .authenticate()
    .then(function (err) {
        console.log("DB Connection has been established successfully.");
    })
    .catch(function (err) {
        console.log("Unable to connect to the database:", err);
    });


app.get('/', (req, res) => {
    console.log("IN GET=>>>>>>");
    employee.findAll().then((result) => {
        //console.log(result);
        res.send(result);
    }).catch((err) => {
        console.log(err);
    }); // findAll() returns a promise
});


function returnEmployeeObj(req) {
    let empObj = {
        emp_name: req.body.emp_name,
        emp_contact_no: req.body.emp_contact_no,
        emp_role: req.body.emp_role,
        salary: req.body.salary,
        team: req.body.team
    }
    return empObj;

}
app.post('/add', (req, res) => {
    console.log("IN POST=>>>>>>");
    // data is in req.body
    let empObj = returnEmployeeObj(req);
    //console.log(req);
    employee.create(empObj).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
});
app.delete('/delete/:id', (req, res) => {
    console.log("IN DELETE=>>>>>>");
    employee.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.sendStatus(200);
        console.log("Deleted Successfully");

    }).catch((err) => {
        console.log(err);
    })
});
app.put('/:id', (req, res) => {
    console.log("IN UPDATE=>>>>>>");
    let empObj = returnEmployeeObj(req);
    employee.update(empObj, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).send(result);
    })
})

app.get('/:id', (req, res) => {
    //let empObj = returnEmployeeObj(req);
    employee.findByPk(req.params.id).then((result) => {
        res.status(200).send(result);
    })
});
app.listen(port, function () {
    console.log("Ready");
});