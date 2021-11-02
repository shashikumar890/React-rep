import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { RegisterUser } from './Redux/register/Register.action';


let Registeruser = () => {
        let dispatch = useDispatch;


    let[user, setUser] =useState({
        username: '',
        email: '',
        password: '',
        designation: '',
        terms:'false'
    })

     let updateInput = (event) =>{
        if(event.target.type === 'checkbox'){
            setUser({
                [event.target.name] : event.target.checked
            });
        }
        else{
            setUser({
                [event.target.name] : event.target.value
            });
        }
        
    }

     let registerUser = (event) =>{
        event.preventDefault();
       dispatch(RegisterUser(user));
    }
    return(
        <React.Fragment>
                <div className="container mt-5">
                    <h1 className="text-danger">Forms handling by Redux</h1>
                    {/* <pre>{JSON.stringify(this.state)}</pre> */}
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-info text-dark">
                                    <p className="h4">Register Here</p>
                                </div>
                                <div className="card-body bg-dark text-white">
                                    <form onSubmit={registerUser}>
                                            <div className="form-group">
                                            <input 
                                            value={user.username}
                                            name="username"
                                            onChange={updateInput}
                                            type="text" className="form-control"placeholder="Username" />
                                            </div>
                                            <div className="form-group">
                                            <input 
                                            value={user.email}
                                            name="email"
                                            onChange={updateInput}
                                            type="email" className="form-control"placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                            <input 
                                            value={user.password}
                                            name="password"
                                            onChange={updateInput}
                                            type="password" className="form-control"placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <select 
                                                value={user.designation}
                                                name="designation"
                                                onChange={updateInput}
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
                                                value={user.terms}
                                                name="terms"
                                                onChange={updateInput}
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
            </React.Fragment>
    )
}
export default Registeruser;