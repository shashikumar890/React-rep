import React from 'react'
import EmployeeOne from './EmployeeOne'
import EmployeeTwo from './EmployeeTwo'


let EmployeeMain =() => {
    return(
        <React.Fragment>
            <hr/>
        <div className="container mt-3">
            <h1 className= "text-dark font-weight-bold text-center">ContactApp Using Redux</h1>
            <div className="row">
                <div className="col">
                <p className="h4 text-danger font-weight-bold">EmployeeApp</p>
                <p className="led">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque quam deleniti aliquam optio corrupti molestiae ut atque, laborum mollitia voluptatem quas accusamus totam consequuntur, explicabo omnis iure reprehenderit. Necessitatibus!</p>
            </div>
            </div>
             <div className="row">
             <div className="col-md-9">
                 <EmployeeOne/>
            </div>
            <div className="col-md-3">
             <EmployeeTwo/>
            </div>
             </div>
        </div>
    </React.Fragment>
    )
}
export default EmployeeMain