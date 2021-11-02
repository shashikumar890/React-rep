import React from 'react'
import {Provider} from 'react-redux';
import EmployeeMain from './EmployeeMain';
import { store } from './Redux/store';
import UserList from './UserList';
 let Axiosparent =() => {
     return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <Provider store = {store}> 
                        <UserList/>
                    </Provider>
                    </div>
                </div>
            {/* row starts here */}
            {/* one commit */}
            {/* two commit */}

                <div className="row">
                    <div className="col">
                        <Provider store = {store}>
                            <EmployeeMain/>
                        </Provider>
                    </div>
                </div>
            </div>
        </React.Fragment>
     )
 }

 export default Axiosparent;
