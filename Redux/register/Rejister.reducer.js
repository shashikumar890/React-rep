import { REGISTER_USER } from "./Register.action";
import * as registerActions from './Register.action';

export const RegisterFeatureKey = 'register'

let intialstate ={
   user:{
    username: '',
    email: '',
    password: '',
    designation: '',
    terms:'false'
   } 
};

export const reducer = (state = intialstate, action) =>{
const{type, payload} = action;
switch (type) {
    case registerActions.REGISTER_USER:
        return{
            user : {
                ...payload
            }
        }

    default: return state;
}
}