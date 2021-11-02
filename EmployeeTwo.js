import React from 'react'
import { useSelector } from 'react-redux';
import * as EmployeeReducer from './Redux/EmployeeData/Employeereducer';

let EmployeeTwo = () => {
let employeeinfo = useSelector((state)=>{
    return state[EmployeeReducer.FetchEmployeeFeatureKey];
})

let {Selectedemployee} =employeeinfo;

    return(
        <React.Fragment>
        {
            Object.keys(Selectedemployee).length > 0 ?
            <React.Fragment>
                <div className="card">
                    <div className="card-header bg-warning">
                         <h4>Employee Details</h4>
                    </div>
                    <div className="card-body bg-dark text-danger">
                         <ul className="list-group">
                             <li className="list-group-item font-weight-bold">NAME: {Selectedemployee.name}</li>
                             <li className="list-group-item font-weight-bold">USER NAME: {Selectedemployee.username}</li>
                             <li className="list-group-item font-weight-bold">EMAIL: {Selectedemployee.email}</li>
                             <li className="list-group-item font-weight-bold">ADDRESS: {Selectedemployee.address.street}</li>
                         </ul>
                    </div>
                </div>
            </React.Fragment>: null
        }
    </React.Fragment>
    )
}
export default EmployeeTwo;