import React from 'react'

export class EmployeeCard extends React.Component {
    constructor(prpos){
        super(prpos);
    }
    render() {
        return (
           <React.Fragment>
               {
                   Object.keys(this.props.employeeList).length > 0 ?
                   <React.Fragment>
                       <div className="card">
                           <div className="card-header bg-warning">
                                <h4>Employee Details</h4>
                           </div>
                           <div className="">
                                <ul className="list-group">
                                    <li className="list-group-item font-weight-bold">NAME: {this.props.employeeList.name}</li>
                                    <li className="list-group-item font-weight-bold">USER NAME: {this.props.employeeList.username}</li>
                                    <li className="list-group-item font-weight-bold">EMAIL: {this.props.employeeList.email}</li>
                                    <li className="list-group-item font-weight-bold">ADDRESS: {this.props.employeeList.address.street}</li>
                                </ul>
                           </div>
                       </div>
                   </React.Fragment>: null
               }
           </React.Fragment>
        )
    }
}

export default EmployeeCard;
