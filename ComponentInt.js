import React from 'react';
import ComponentInt2 from './ComponentInt2';

class ComponentInt extends React.Component{
    constructor(prpos){
        super(prpos);
        this.state= {
            pMessage: '',
            cText: ''
        }
    }
    ParentData = (data) =>{
        this.setState({
            ...this.state,
            cText: data
        });
    }

    SendData = (e) =>{
       this.setState({
           pMessage: e.target.value
       })
    }
    render(){
        return(
            <React.Fragment>
                <h1 className = "text-warning font-weight-bold mt-3">Sharing Data Between Parent & Child Components</h1>
                <div className="conatainer mt-3">
                    <div className="row">
                        <div className="col-md-5 offset-4">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <p className="h4">Parent Component</p>
                                </div>
                                <div className="card-body bg-secondary">
                                    <form>
                                        <div className="form-group">
                                            <input 
                                            value={this.state.pMessage}
                                            onChange={this.SendData}
                                            type="text" className="form-control" />
                                            <p>Message from child: {this.state.cText}</p>
                                            <ComponentInt2 cMessage = {this.state.pMessage} ChildData= {this.ParentData}/>
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
export default ComponentInt;