import React from 'react';

class FormsBinding extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: 'shashi'
        }
    };
    update = (event) =>{
        this.setState({
            username:event.target.value
        });
    };
    render(){
        return(
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-success text-white">
                                    <p className="h4">React Twoway Binding</p>
                                </div>
                                <div className="card-body bg-warning text-dark">
                                    <form>
                                        <div className="form-group">
                                        <input className= "form-control"
                    value={this.state.username}
                    onChange={this.update}
                    type="text" placeholder="username" />
                    <h3>{this.state.username}</h3>
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
}
export default FormsBinding;