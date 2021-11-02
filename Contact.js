import React from 'react';
import { Provider } from 'react-redux';
import FunctionEvent from './FunctionEvent';
import { PizzaHut } from './PizzaHut';
import { store } from './Redux/store';


class Contact extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            product: {
                name: 'perfume',
                id:'A1A0216',
                qty: 1,
                price: 150
            }
        }
        
    }
    incrqty = () =>{
        this.setState({
            product: {
                ...this.state.product,
                qty: this.state.product.qty + 1
            }
        })
    };
    dcrqty = () =>{
        this.setState({
            product: {
                ...this.state.product,
                qty: (this.state.product.qty - 1) > 0 ? this.state.product.qty -1: 1
            }
        })
    };
    render(){
        let {name, id, qty, price} = this.state.product;
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
                                        <td>{name}</td>
                                        <td>{id}</td>
                                        <td>{price}</td>
                                        <td>
                                            <i className="fa fa-minus-circle mx-2"onClick={this.dcrqty}/>
                                            {qty}
                                            <i className="fa fa-plus-circle mx-2" onClick={this.incrqty}/>
                                            </td>
                                        
                                        <td>{qty*price}</td>
                                    </tr>
                                </tbody>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {/* <FunctionEvent/> */}
                           <Provider store = {store}>
                                <PizzaHut/>
                           </Provider>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Contact;