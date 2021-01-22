import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ViewEmployee from "./ViewEmployee";
function View() {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        axios.get('http://localhost:7000/').then((res) => {
            // console.log(res.data);
            const employees = res.data;
            setEmployees(employees);
        })
    }, []);
    function del(id) {
        axios.delete(`http://localhost:7000/delete/${id}`).then(() => {
            console.log("Deleted");
            axios.get('http://localhost:7000/').then((res) => {
                // console.log(res.data);
                const employees = res.data;
                setEmployees(employees);
            })
        });
    }
    return (
        <ViewEmployee
            employees={employees}
            setEmployees={setEmployees}
            delete={del}
        />
    )
}

export default View
