import React, { useState, useEffect } from 'react'

const RestClient = ()=>{
    const [employees, setEmployees] =useState([]);
    useEffect(()=>{
        debugger;
        fetch("http://localhost:1234/Employees")
        .then(res => res.json()).then((data) => setEmployees(data))
    }, [])

    return(
        <table border="1">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Employee Address</th>
                    <th>Employee Salary</th>
                    <th>Options</th>
                </tr>
            </thead>
            {employees.map(emp =>(
                <tr>
                        <td>{emp.empId}</td>
                        <td>{emp.empName}</td>
                        <td>{emp.empAddress}</td>
                        <td>{emp.empSalary}</td>  
                </tr>      
            ))}
        </table>
    )
}
export default RestClient
/*
How to use HTTP to create a basic web app
How to use EXPRESS to create a REST service. 
How to use jQuery to make REST Call using $.get and $.post. 
How to make queries on MongoDB Database. 
httpWeb App with jQuery -> Express Web API -> MongoDB database.
*/
