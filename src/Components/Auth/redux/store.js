import React from "react"
import { combineReducers, createStore } from "redux"
import  LoginReducers  from "../Login/redux/reducers"

const allReducers = combineReducers({
    LoginReducers
})
export const store = createStore(LoginReducers)