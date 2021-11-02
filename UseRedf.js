import React, { useState } from 'react';

let UseRedf = () =>{
    let [message, setMessage] = useState('hello')
    return(
        <React.Fragment>
            <React.Fragment>
            <div className="conatiner mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-secondary">
                                <p className="h3">By using useSate</p>
                            </div>
                            <div className="card-body bg-light text-dark">
                                <p className="h4">{message}</p>
                                <button onClick ={e => setMessage('goodmorning')} className="btn btn-primary">Gudmrng</button>
                                <button onClick ={e => setMessage('goodaftrnoon')} className="btn btn-success">Gudaftrn</button>
                                <button  onClick ={e => setMessage('goodevening')} className="btn btn-warning">Gudevng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        </React.Fragment>
    )
}
export default UseRedf;