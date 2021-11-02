import React from 'react';
import {UsersData} from "./Users";

class MapingExm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users: UsersData
        
        }
    }
    render(){
        return(
            <React.Fragment>
                <h1 className="text-danger font-weight-bold">.Maping Example</h1>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                        <table className=" table table-hover table-striped text-center table-primary">
                            <thead>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>USERNAME</th>
                                <th>EMAIl</th>
                                <th>ADDRESS</th>
                            </thead>
                            <tbody className="bg-dark text-white">
                                {
                                    this.state.users.map(user =>{
                                        return(
                                            <tr key = {user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.address.street}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default MapingExm;