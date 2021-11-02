import React from 'react';

class ComponentTwo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message:''
        }
    }
    SubmitServer = (event) => {
        event.preventDefault();
        this.props.senddata(this.state.message)
    }
    render(){
        return(
            <React.Fragment>
                <div className="card">
                    <div className="card-header bg-success">
                        <p className="h3">Component2</p>
                    </div>
                    <div className="card-body bg-dark">
                        <form onSubmit = {this.SubmitServer}>
                            <div className="form-group">
                                <input 
                                value= {this.state.message}
                                onChange = {e => this.setState({message: e.target.value})}
                                type="text" className="form-control" />
                                <input type="submit" className="btn btn-success btn-sm" value="send" />
                            </div>

                        </form>
                    </div>
                    <div className="card-footer bg-success">
                        <p>From Component1: {this.props.clientMessage}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ComponentTwo;