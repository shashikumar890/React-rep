import axios from 'axios';


export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

 export let FetchUserRequest = () => {
    return{
        type: FETCH_USER_REQUEST
    }
}
export let FetchUserSuccess = (user) => {
    return{
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}
export let FetchUserFailure = (error) => {
    return{
        type: FETCH_USER_FAILURE,
        payload: Error
    }
}

export const FetchUser = () => {
    return (dispatch) => {
        dispatch(FetchUserRequest());
        let DataUrl = 'https://jsonplaceholder.typicode.com/users';
        axios.get(DataUrl).then((responce)=>{
            dispatch(FetchUserSuccess(responce.data))
        })
        .catch((error)=>{
            dispatch(FetchUserFailure(error))
        });
    };
};





