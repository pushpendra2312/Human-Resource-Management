CREATE DATABASE employee;

CREATE TABLE employee_table(
    id SERIAL PRIMARY KEY NOT NULL,
    emp_name VARCHAR NOT NULL,
    emp_contact_no VARCHAR NOT NULL,
    emp_role VARCHAR NOT NULL,
    salary VARCHAR NOT NULL,
    team VARCHAR NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT current_timestamp,
    updated_at timestamp with time zone NOT NULL DEFAULT current_timestamp
);

insert into employee_table(emp_name,emp_contact_no,emp_role,salary,team)
values('Ali','7976197411','SE','22000','Development');

-- sudo -i -u postgres for getting into postgres
-- go to database -> psql
-- connect with your newly created database using -> \c db_name
-- create table -> Create Table
-- select * from table_name 