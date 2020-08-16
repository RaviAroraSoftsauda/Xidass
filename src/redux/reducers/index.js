import {combineReducers} from "redux"
import authReducer from './authReducer'
import errorReducer from './errorReducer';
import cartReducer from "./cartReducer"
export default combineReducers({
    cart:cartReducer,
    auth:authReducer,
    errors: errorReducer,
})