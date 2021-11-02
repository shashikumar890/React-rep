import* as UserListAction from '../UserList/Userlist.action';


export const UserListFeaturKey= 'userlist';

let intialstate ={
    load: false,
    user: [],
    errorMesage: ''
}

export const reducer = (state = intialstate, action) => {
    let {type, payload} = action
    switch (type) {
        case UserListAction.FETCH_USER_REQUEST:
            return {
                ...state,
                load: true
            }
        case UserListAction.FETCH_USER_SUCCESS:
            return{
                ...state,
                user: payload
            }
            case UserListAction.FetchUserFailure:
                return{
                    ...state,
                    errorMesage: payload
                }
    
        default: return  state;
    }
}