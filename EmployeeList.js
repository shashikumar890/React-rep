import React  from 'react'
import axios, {Axios} from 'axios';

export class EmployeeList extends React.Component {
    constructor(prpos){
        super(prpos);
        this.state = {
            EmployeeData: [],
            Errormessage: ''
        }
    }
        componentDidMount(){
            let DataUrl = 'https://jsonplaceholder.typicode.com/users'
            axios.get(DataUrl).then((responce) => {
                this.setState({
                    ...this.state,
                    EmployeeData: responce.data
                });
            }).catch((error) => {
                this.setState({
                    ...this.state,
                    Errormessage: error
                })
            })
        }
        ClickEmployee = (Employee) =>{
            this.props.sendEmployee(Employee)
        }

    render(){
        return (
            <div>
                <table className="table table-hover table-striped text-center table-primary">
                    <thead>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>USERNAME</th>
                            <th>EMAIl</th>
                            <th>ADDRESS</th>
                        </thead>
                        <tbody className = "bg-dark text-white">
                            {
                                this.state.EmployeeData.length > 0 ?
                                <React.Fragment>
                                    {
                                        this.state.EmployeeData.map(Employee =>{
                                            return(
                                                <tr key = {Employee.id} onClick = {this.ClickEmployee.bind(this,Employee)}>
                                                    <td>{Employee.id}</td>
                                                    <td>{Employee.name}</td>
                                                    <td>{Employee.username}</td>
                                                    <td>{Employee.email}</td>
                                                    <td>{Employee.address.street}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </React.Fragment>: null
                            }
                        </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeList;
