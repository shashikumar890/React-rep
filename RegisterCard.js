import React from 'react';
import Registeruser from './Registeruser';
import {Provider} from 'react-redux';
import { store } from './Redux/store';

class RegisterCard extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            designation: '',
            terms:'false'
        }
    };

    updateInput = (event) =>{
        if(event.target.type === 'checkbox'){
            this.setState({
                [event.target.name] : event.target.checked
            });
        }
        else{
            this.setState({
                [event.target.name] : event.target.value
            });
        }
        
    }

    //registerUser

    registerUser = (event) =>{
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <React.Fragment>
                <div className="container mt-5">
                    <h1 className="text-danger">Forms handling</h1>
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className="row">
                        <div className="col-md-5 offset-1">
                            <div className="card">
                                <div className="card-header bg-info text-dark">
                                    <p className="h4">Register Here</p>
                                </div>
                                <div className="card-body bg-dark text-white">
                                    <form onSubmit={this.registerUser}>
                                            <div className="form-group">
                                            <input 
                                            value={this.state.username}
                                            name="username"
                                            onChange={this.updateInput}
                                            type="text" className="form-control"placeholder="Username" />
                                            </div>
                                            <div className="form-group">
                                            <input 
                                            value={this.state.email}
                                            name="email"
                                            onChange={this.updateInput}
                                            type="email" className="form-control"placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                            <input 
                                            value={this.state.password}
                                            name="password"
                                            onChange={this.updateInput}
                                            type="password" className="form-control"placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <select 
                                                value={this.state.designation}
                                                name="designation"
                                                onChange={this.updateInput}
                                                className="form-control">
                                                    <option value="">Select Designation</option>
                                                    <option value="Software Developer">Software Developer</option>
                                                    <option value="Sr.Software Engineer">Sr.Software Engineer</option>
                                                    <option value="Technical Lead">Technical Lead</option>
                                                    <option value="Manager">Manager</option>
                                                    <option value="Director">Director</option>
                                                </select>
                                            </div>
                                            <div className="form-check">
                                                <input 
                                                value={this.state.terms}
                                                name="terms"
                                                onChange={this.updateInput}
                                                type="checkbox" className="form-check-input" value="" id="defaultCheck1"/>
                                                <label htmlFor="defaultCheck1" className="form-check-label">
                                                    Accept Terms & Conditions
                                                </label>
                                            </div>
                                            <div className="form-group">
                                                <input 
                                                type="submit" className="btn btn-danger btn-sm" placeholder="Register"/>
                                            </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                           <Provider store = {store}>
                            <Registeruser/>
                           </Provider>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default RegisterCard;