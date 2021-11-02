import React, {useState} from 'react';

let FunctionEvent = () =>{
    let [product, setProduct] = useState({
        name: 'perfume',
        id:'A1A0216',
        qty: 1,
        price: 150
    })
    return(
        <React.Fragment>
        <div className="container mt-5">
            <h1 className="text-success">Event Handling</h1>
            <div className="row">
                <div className="col">
                    <div className="table table-hover text-center table-light table-striped">
                        <thead className="bg-primary">
                            <tr>
                                <th>NAME</th>
                                <th>ID</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody className="bg-success font-weight-bold">
                            <tr>
                               <td>{product.name}</td>
                               <td>{product.id}</td>
                               <td>{product.qty}</td>
                               <td>{product.price}</td>
                            </tr>
                        </tbody>
                    </div>
                </div>
            </div>
            
        </div>
    </React.Fragment>
    )
}
export default FunctionEvent;