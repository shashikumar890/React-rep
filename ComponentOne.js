import React from 'react';

class ComponentOne extends React.Component{
    constructor(props){
        super(props);
        this.state={
            message: ''
        }
    }
    submitClient = (event) =>{
        event.preventDefault();
        this.props.SendData(this.state.message)
    }
    render(){
        return(
            <React.Fragment>
                <div className="card">
                    <div className="card-header bg-warning">
                        <p className="h3">Component1</p>
                    </div>
                    <div className="card-body bg-dark">
                        <form onSubmit= {this.submitClient}>
                            <div className="form-group">
                                <input 
                                value = {this.state.message}
                                onChange = {e => this. setState({message: e.target.value})}
                                type="text" className="form-control" />
                                <input type="submit" className="btn btn-warning btn-sm" value="send" />
                            </div>

                        </form>
                    </div>
                    <div className="card-footer bg-warning">
                        <p>From Component2: {this.props.servermessage}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ComponentOne;
