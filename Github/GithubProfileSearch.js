import React from 'react';

class GithubProfileSerach extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            githubUsername: ''
        }
    };

    render(){
        return(
            <React.Fragment>
                <div className="continer mt-3">
                    <div className="row">
                        <dic className="col">
                            <div className="card">
                                <div className="card-header bg-secondary">
                                <p className="h4">Github Profile Search</p>
                                </div>
                                <div className="card-body">
                                    <form className="form-inline">
                                        <div className="form-group">
                                            <input  
                                            value={this.state.githubUsername}
                                            onChange={e=> this.setState({...this.state, githubUsername: e.target.value})}
                                            size = "30" type="text" className="form-control" placeholder="Github User Name" />
                                        </div>
                                        <div>
                                            <input type="submit" value="search" className="btn btn-primary btn-sm" />
                                        </div>
                                        <pre>{this.state.githubUsername}</pre>
                                    </form>
                                </div>
                            </div>
                        </dic>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default GithubProfileSerach;