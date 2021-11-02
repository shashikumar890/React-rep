import React from 'react'
import EmployeeCard from './EmployeeCard'
import EmployeeList from './EmployeeList'

export class EmployeeApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            employeeList :{}
        }
    }
    RecieveEmployee = (Employee) =>
        {
            this.setState( {
                employeeList: Employee
            })
        }
    render() {
        return (
           <React.Fragment>
               <div className="container mt-3">
                   <div className="row">
                       <div className="col">
                       <p className="h4 text-danger font-weight-bold">EmployeeApp</p>
                       <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque quam deleniti aliquam optio corrupti molestiae ut atque, laborum mollitia voluptatem quas accusamus totam consequuntur, explicabo omnis iure reprehenderit. Necessitatibus!</p>
                   </div>
                   </div>
                    <div className="row">
                    <div className="col-md-9">
                        <EmployeeList sendEmployee = {this.RecieveEmployee}/>
                   </div>
                   <div className="col-md-3">
                    <EmployeeCard employeeList= {this.state.employeeList}/>
                   </div>
                    </div>
               </div>
           </React.Fragment>
        )
    }
}

export default EmployeeApp;
