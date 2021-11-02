import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    constructor(prpos){
        super(prpos);
    }
    render(){
        return(
            <React.Fragment>
                <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand text-danger font-weight-bold" href="#">ReactJs</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to ="/" class="nav-link active">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/MainComponent" class="nav-link">CompInteraction</Link>
        </li>
        <li class="nav-item">
          <Link to="/FormsBinding" class="nav-link">Forms</Link>
        </li>
        <li class="nav-item">
          <Link to="/RegisterCard" class="nav-link">Register</Link>
        </li>
        <li class="nav-item">
          <Link to="/ConditionalLoop" class="nav-link">Looping</Link>
        </li>
        <li class="nav-item">
          <Link to="/Contact" class="nav-link">EventHandling</Link>
          </li>
        <li class="nav-item">
          <Link to="/MapingExm" class="nav-link">Maping</Link>
        </li>
        <li class="nav-item">
          <Link to="/CountryCards" class="nav-link">ReactState</Link>
        </li>
        <li class="nav-item">
          <Link to="/EmployeeApp" class="nav-link">EmployeeApp</Link>
        </li>
        <li class="nav-item">
          <Link to="/Axiosparent" class="nav-link">Axios</Link>
        </li>
        <li class="nav-item">
          <Link to="/GithubProfileSearch" class="nav-link">Github</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
                
            </React.Fragment>
        )
    }
}
export default Navbar;