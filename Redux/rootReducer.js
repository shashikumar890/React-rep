import {combineReducers} from 'redux';
import { pizzahutreducer } from './pizzahut/pizzahut.reducer';
import * as regiterReducer from '../Redux/register/Rejister.reducer';
import * as UserlistReducer from './UserList/Userlist.reducer';
import * as EmployeeReducer from './EmployeeData/Employeereducer'


 export const rootReducer = combineReducers({
pizza: pizzahutreducer,
[regiterReducer.RegisterFeatureKey]: regiterReducer.reducer,
[UserlistReducer.UserListFeaturKey]: UserlistReducer.reducer,
[EmployeeReducer.FetchEmployeeFeatureKey]: EmployeeReducer.reducer
});
