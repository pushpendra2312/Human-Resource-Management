import React from 'react'
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function ViewEmployee(props) {
    // console.log(props.employees)
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Contact No.</th>
                    <th>Role</th>
                    <th>Salary</th>
                    <th>Team</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>

                {props.employees.map((employee, index) => {
                    // console.log(employee)
                    return (
                        <tr key={index} >
                            <td>{employee.emp_name}</td>
                            <td>{employee.emp_contact_no}</td>
                            <td>{employee.emp_role}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.team}</td>
                            <td><Link
                                to={`edit/${employee.id}`}><Button>Edit</Button></Link> -
                                 -<Button onClick={() => {
                                    props.delete(employee.id);
                                }}> Delete</Button></td>
                        </tr>
                    )
                })}

            </tbody>
        </Table >
    )
}

export default ViewEmployee
