import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import styles from "./css/form.module.css";
// import axios from 'axios';
function FormComponent(props) {


    return (
        <Form onSubmit={props.submitForm}>
            <Form.Group className={styles.formalignment}  >
                <Form.Label className={styles.label}>Name</Form.Label>
                <FormControl
                    className={styles.child}
                    type="text"
                    placeholder="Name"
                    value={props.emp_name}
                    onChange={(event) => {
                        props.setName(event.target.value);
                    }}
                    required
                />
                <Form.Label className={styles.label}>Contact No.</Form.Label>
                <FormControl
                    className={styles.child}
                    type="number"
                    placeholder="Contact No."
                    value={props.emp_contact_no}
                    onChange={(event) => {
                        props.setContact(event.target.value);
                    }}
                    required
                />
                <Form.Label className={styles.label}>Role</Form.Label>
                <Form.Control
                    as="select"
                    custom
                    value={props.emp_role}
                    onChange={(event) => {
                        props.setRole(event.target.value);
                    }} >
                    <option>Software Engineer</option>
                    <option>Quality Assurance</option>
                    <option>Database Administrator</option>
                    <option>Manager</option>
                    <option>Project Lead</option>
                </Form.Control>
                <Form.Label className={styles.label}>Salary</Form.Label>
                <Form.Control
                    as="select"
                    custom
                    value={props.salary}
                    onChange={(event) => {
                        props.setSalary(event.target.value)
                    }} >
                    <option>1,00,000 - 2,00,000</option>
                    <option>2,00,000 - 3,00,000</option>
                    <option>3,00,000 - 4,00,000</option>
                    <option>4,00,000 - 5,00,000</option>
                    <option>5,00,000 +</option>
                </Form.Control>
                <Form.Label className={styles.label}>Team</Form.Label>
                <Form.Control as="select" custom
                    value={props.team}
                    onChange={(event) => {
                        props.setTeam(event.target.value)
                    }} >
                    <option>Frontend</option>
                    <option>Testing</option>
                    <option>Backend</option>
                    <option>Management</option>
                    <option>Marketing</option>
                </Form.Control>
                <Button type="submit" value="Submit" className={styles.submits} >Submit form</Button>
            </Form.Group>
        </Form>

    )
}

export default FormComponent;
