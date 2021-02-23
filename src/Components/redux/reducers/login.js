import { ROUTE, USER_INFO_KEY } from "common/constants"
import { TYPES } from "../constants"
const LoginInitialState = {
    dataUser: USER_INFO_KEY,
    alertTitle: "",
    isShowAlert: false,
    dataPackages: ""
}
export default function loginReducers(state = LoginInitialState, action) {
    switch (action.type) {
        case TYPES.AUTH_LOGIN_ASYNC:
            localStorage.setItem("isLogin", action.dataUser.data.token)
            return { ...state, dataUser: action.dataUser, alertTitle: action.alertTitle, isShowAlert: true }
        case TYPES.DISMISS_ALERT:
            return { ...state, isShowAlert: !state.isShowAlert }
        case TYPES.AUTH_LOGOUT:
            if (localStorage.getItem("isLogin")) {
                localStorage.removeItem("isLogin")
                window.location.pathname = `${ROUTE.SIGNIN}`
                return { ...state, dataUser: state.dataUser }
            }
            break
        default:
            return state
    }
}