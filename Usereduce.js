    import React, {useReducer}from 'react'
  
let Usereduce = () =>{
let initialState = {
    message: 'hello'
}
let reducer = (state = initialState, action) =>{
    switch (action) {
        case 'gm':
            return{
                message: 'good morning'
            };
            case 'ga': 
            return{
                message: 'good afternoon'
            };
            case 'ge': 
            return{
                message: 'good eveing'
            }
        default: return state;        
    }
}


    let [state, dispatch] = useReducer(reducer, initialState)
    return(
        <React.Fragment>
            <div className="conatiner mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-primary">
                                <p className="h3">UseReducer Exapmle</p>
                            </div>
                            <div className="card-body bg-dark text-white">
                                <p className="h4">{state.message}</p>
                                <button onClick = {e => dispatch('gm')} className="btn btn-primary">Gudmrng</button>
                                <button onClick = {e => dispatch('ga')} className="btn btn-success">Gudaftrn</button>
                                <button onClick = {e => dispatch('ge')} className="btn btn-warning">Gudevng</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Usereduce;