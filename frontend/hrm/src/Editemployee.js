import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
// import employee from '../../../backend/models/employee.model';
import FormComponent from './FormComponent'

function Editemployee() {
    const history = useHistory();
    const { id } = useParams();
    // console.log(id);
    const [emp_name, setName] = useState('');
    const [emp_contact_no, setContact] = useState('');
    const [salary, setSalary] = useState('')
    const [emp_role, setRole] = useState('')
    const [team, setTeam] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:7000/${id}`).then((res) => {
            //  console.log(res.data);
            const employee = res.data;
            setName(employee.emp_name)
            setContact(employee.emp_contact_no)
            setSalary(employee.salary)
            setRole(employee.emp_role)
            setTeam(employee.team)
        }).catch((err) => {
            console.log(err);
        })
    }, [id])

    function submitForm(event) {
        event.preventDefault();
        const employee = {
            emp_name, emp_contact_no, emp_role, salary, team
        }
        axios.put(`http://localhost:7000/${id}`, employee).then((response) => {
            // console.log(response);
            history.push('/view');
        })
        // console.log(employee);
    }
    return (
        <div>
            <h1>Edit page</h1>

            <FormComponent submitForm={submitForm}
                emp_name={emp_name}
                setName={setName}
                emp_contact_no={emp_contact_no}
                setContact={setContact}
                salary={salary}
                setSalary={setSalary}
                emp_role={emp_role}
                setRole={setRole}
                team={team}
                setTeam={setTeam}
            />
        </div>
    )
}

export default Editemployee
