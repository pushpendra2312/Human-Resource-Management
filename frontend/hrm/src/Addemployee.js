import axios from 'axios';
import React, { useState } from 'react'
import FormComponent from './FormComponent'


function Addemployee() {
    const [emp_name, setName] = useState('');
    const [emp_contact_no, setContact] = useState('');
    const [salary, setSalary] = useState('1,00,000 - 2,00,000')
    const [emp_role, setRole] = useState('Software Engineer')
    const [team, setTeam] = useState('Frontend')

    function submitForm(event) {
        event.preventDefault();
        console.log("in submit func");
        const employee = {
            emp_name, emp_contact_no, emp_role, salary, team
        }
        console.log(employee);
        axios.post('http://localhost:7000/add', employee).then((res) => {
            console.log(res.data);
        });
        setName('');
        setContact('');
        setRole('Software Engineer');
        setSalary('1,00,000 - 2,00,000');
        setTeam('Frontend');
    }
    return (
        <div>
            <FormComponent
                submitForm={submitForm}
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

export default Addemployee
