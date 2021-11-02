
import React from 'react';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

class MainComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            clientMessage: '',
            serverMessage:''
        }
    }
    RecieveClient = (data)=>{
        this.setState({
            clientMessage: data
        });
    }
    RecieveServerData = (data)=> {
        this.setState({
            serverMessage: data
        });
    }
    render(){
        return(
            <React.Fragment>
                <h1 className="text-danger font-weight-bold mt-5">Sharing Data Between Sibling Components</h1>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-5 offset-1">
                            <ComponentOne SendData={this.RecieveClient} servermessage = {this.state.serverMessage}/>
                        </div>
                        <div className="col-md-5 offset-1">
                           <ComponentTwo clientMessage = {this.state.clientMessage} senddata = {this.RecieveServerData}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default MainComponent;