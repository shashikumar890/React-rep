import React from 'react';

export class Home extends React.Component {
    constructor(prpos){
        super(prpos);
    }
    render() {
        return (
           <React.Fragment>
               <div className="bg-image">
                   <div className="wrapper">
                       <div className="d-flex flex-column text-center justify-content-center align-items-center h-100">
                       <h3 className="display-3">Welcome to ReactJs</h3>
                       <p className="lead px-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi numquam assumenda eaque dolorum praesentium amet commodi quae? Magni natus dicta perspiciatis impedit laborum! Aliquam, iure. Vitae omnis voluptas ab provident.</p>
                       </div>
                   </div>
               </div>
           </React.Fragment>
        )
    }
}

export default Home;
