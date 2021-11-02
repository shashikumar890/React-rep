import React from 'react';
import UseRedf from './UseRedf';
import Usereduce from './Usereduce';


class CountryCards extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img: 'https://www.crictracker.com/wp-content/uploads/2020/04/Virender-Sehwag-1.jpg',
            name: 'virender sehwag',
            age: 38,
            bating: 'Right Handed Batsmen',
            team: 'india',
            highestScore: 219
        }
    }
    render(){
        let {name, age, bating, team, highestScore} = this.state;
        return(
            <React.Fragment>
                <div className="container mt-3">
                    <h1 className="text-secondary">State Concept</h1>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <p className="h4">Cricketer Detailes</p>
                                </div>
                                <div className="card-body bg-danger text-black font-weight-bold">
                                    <div className="row">
                                        <div className="col-md-4">
                                           <img src={this.state.img} alt="" className="img-fluid img-thumbnail" />
                                        </div>
                                        <div className="col-md-8">
                                            <ul className="list-group">
                                                <li className="list-group-item">NAME: {name}</li>
                                                <li className="list-group-item">AGE: {age}</li>
                                                <li className="list-group-item">BATING: {bating}</li>
                                                <li className="list-group-item">TEAM: {team}</li>
                                                <li className="list-group-item">HIGHESTSCORE: {highestScore}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col">
                            <Usereduce/>
                            <UseRedf/>
                        </div>
                </div>
            </React.Fragment>

        )
    }
}

export default CountryCards;