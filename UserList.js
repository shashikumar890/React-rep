import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import* as UserlistReducer from './Redux/UserList/Userlist.reducer';
import* as UserListAction from './Redux/UserList/Userlist.action';


let UserList = () => {
 let dispatch = useDispatch();

 let userInfo = useSelector((state)=>{
    return state[UserlistReducer.UserListFeaturKey];
 })

 let {load, user, errorMessage} = userInfo;

    let GetUsers = () => {
        dispatch(UserListAction.FetchUser());
    }
    return(
        <React.Fragment>
            <div className="container mt-5">
                <h1 className="text-danger text-center font-weight-bold">Axios Using Redux</h1>
                <div className="row">
                    <div className="col">
                        <p className="h2 text-primary">UsersData</p>
                        <p className="h5 led">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, molestiae iusto! In natus esse atque, harum possimus aperiam voluptatem maiores quam placeat pariatur perspiciatis nulla laudantium doloremque molestias id. Commodi.</p>
                        <button onClick = {GetUsers} className="btn btn-dark btn-sm">GetUsers</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
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
                                    user.length > 0 ? 
                                    <React.Fragment>
                                        {
                                            user.map(user =>{
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
                                    </React.Fragment> : null
                                    }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default UserList;