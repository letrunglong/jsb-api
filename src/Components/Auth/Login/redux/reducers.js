import { USER_INFO_KEY } from "common/constants"
import React from "react"
import { TYPES } from "./contants"

const LoginInitialState = {
    dataUser: USER_INFO_KEY,
    isLogin:false
}
const LoginReducers = (state = LoginInitialState, action) => {
    switch (action.type) {
        case TYPES.AUTH_LOGIN:
            return {...state,dataUser:action.dataUser,isLogin:!state.isLogin}
        default:
            return state
    }
}
export default LoginReducers