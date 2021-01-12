import { combineReducers, createStore } from "redux"
import  LoginReducers  from "../Auth/Login/redux/reducers"

const allReducers = combineReducers({
    LoginReducers
})
export const store = createStore(LoginReducers)