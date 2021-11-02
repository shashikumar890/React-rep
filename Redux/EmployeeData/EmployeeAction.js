import axios from "axios";

export const FETCH_EMPLOYEE_REQUEST = "FETCH_EMPLOYEE_REQUEST";
export const FETCH_EMPLOYEE_SUCCESS = "FETCH_EMPLOYEE_SUCCESS";
export const FETCH_EMPLOYEE_FAILURE = "FETCH_EMPLOYEE_FAILURE";
export const SELECTED_EMPLOYEE = "SELECTED_EMPLOYEE";

export const fetchEmployees = () =>{
    return async(dispatch) => {
        dispatch({type: FETCH_EMPLOYEE_REQUEST});
        try{
            let dataUrl = 'https://jsonplaceholder.typicode.com/users';
            let responce = await axios.get(dataUrl);
            dispatch({type: FETCH_EMPLOYEE_SUCCESS, payload: responce.data})
        }
        catch(error){
          dispatch({type: FETCH_EMPLOYEE_FAILURE, payload: error});
        }
    }
};

export const SelectedEmployee = (employees) => {
    return{
        type: SELECTED_EMPLOYEE,
        payload: employees
    }
}
