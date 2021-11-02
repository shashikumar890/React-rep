import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import * as EmployeeActions from './Redux/EmployeeData/EmployeeAction';
import * as EmployeeREducer from './Redux/EmployeeData/Employeereducer';

let EmployeeOne = () => {
    
let dispatch = useDispatch();
let employeeInfo = useSelector((state)=>{
    return state[EmployeeREducer.FetchEmployeeFeatureKey];
})

let {load, employees, errorMessage} = employeeInfo;
 
    useEffect(() =>{
        dispatch(EmployeeActions.fetchEmployees());
    },[])

    let SelectRow = (employee) =>{
        dispatch(EmployeeActions.SelectedEmployee(employee))
    }

    return(
        <React.Fragment>
            <table className=" table table-hover table-striped text-center table-secondary">
                            <thead>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>USERNAME</th>
                                <th>EMAIl</th>
                                <th>ADDRESS</th>
                            </thead>
                            <tbody className="bg-dark text-light">
                                {
                                    employees.length > 0 ?
                                    <React.Fragment>
                                        {
                                            employees.map(employee =>{
                                                return(
                                                    <tr key = {employee.id} onClick = {SelectRow.bind(this, employee)}>
                                                        <td>{employee.id}</td>
                                                        <td>{employee.name}</td>
                                                        <td>{employee.username}</td>
                                                        <td>{employee.email}</td>
                                                        <td>{employee.address.street}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </React.Fragment> : null
                                    }
                            </tbody>
                        </table>
        </React.Fragment>
    )
}
export default EmployeeOne;