import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Buypiza } from './Redux/pizzahut/PizxaHut.action';


 let PizzaHut = () =>{
    let dispatch = useDispatch();
    let pizaInfo = useSelector((state) =>{
        return state['pizza']
    })

    let clickBypizza = () =>{
        dispatch(Buypiza());
    }
     return(
         <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <p className="h4">PIzzaHut Example</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ullam rem nesciunt amet possimus assumenda quos aliquam suscipit officiis et nemo sint culpa dicta natus rerum, reiciendis doloremque libero omnis</p>
                </div>
                <div className="row">
                <div className="col-md-5">
                        <img className="img-thumbnail img-fluid" src={'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg'} alt="" />
                    </div>
                    <div className="col-md-7">
                        <p className="h2 text-danger">
                            chiken pizza
                        </p>
                        <p className="h4">Availabe Pizza: <span className="font-weight-bold">{pizaInfo.count}</span></p>
                        <button onClick={clickBypizza} className="btn btn-primary btn-sm">
                            BuyPizza
                        </button>
                    </div>
                </div>
            </div>
            </div>
         </React.Fragment>
     )
 }
 export {PizzaHut};