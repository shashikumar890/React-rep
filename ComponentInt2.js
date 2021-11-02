import React from 'react';

class ComponentInt2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chMsg: ''
        }
    }
    ChildData = (e) => {
        this.setState({
            chMsg: e.target.value
        });
        this.props.ChildData(e.target.value);
    };
    render() {
        return (
            <React.Fragment>
                <div className="conatainer mt-3">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <p className="h4">Child Component</p>
                                </div>
                                <div className="card-body bg-success">
                                    <form>
                                        <div className="form-group">
                                            <input
                                                value={this.state.chMsg}
                                                onChange={this.ChildData}
                                                type="text" className="form-control" />
                                            <p>Message from Parent: {this.props.cMessage}</p>
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
export default ComponentInt2;