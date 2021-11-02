import * as EmployeeActions from '../EmployeeData/EmployeeAction';


export const FetchEmployeeFeatureKey = 'fetchemployee';

let intialstate ={
    load: false,
    employees: [],                                                               
    Selectedemployee:{},
    errorMessage: ''
}

export const reducer = (state = intialstate, action) =>{
    let {type, payload} = action;
    switch (type) {
        case EmployeeActions.FETCH_EMPLOYEE_REQUEST:
            return{
                ...state,
                load: true
            }
        case EmployeeActions.FETCH_EMPLOYEE_SUCCESS:
            return{
                ...state,
                employees: payload
            }    
         case EmployeeActions.FETCH_EMPLOYEE_FAILURE:
             return{
                 ...state,
                 errorMessage:payload
             }   
         case EmployeeActions.SELECTED_EMPLOYEE:
             return{
                 ...state,
                 Selectedemployee: payload
             }    
    
        default: return state;
    }
     
}