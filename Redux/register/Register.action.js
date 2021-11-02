export const REGISTER_USER = 'REGISTER_USER';


let RegisterUser = (user) => {
    return{
        type: REGISTER_USER,
        payload: user
    }
}
export {RegisterUser};