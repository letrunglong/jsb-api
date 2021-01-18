import { USER_INFO_KEY } from "common/constants"
import { TYPES } from "../constants/contants"
const LoginInitialState = {
    dataUser: USER_INFO_KEY,
    alertTitle: "",
    isShowAlert:false,
    dataPackages:""
}
export default function loginReducers  (state = LoginInitialState, action) {
    switch (action.type) {
        case TYPES.AUTH_LOGIN:
            localStorage.setItem("isLogin",action.dataUser.data.token)
            return { ...state, dataUser: action.dataUser, alertTitle: action.alertTitle, isShowAlert: true}
        case TYPES.DISMISS_ALERT:
            return { ...state, isShowAlert: !state.isShowAlert}
        // case TYPES.SET_DATA_PACKAGES:
        //     return { ...state, dataPackages:action.dataPackages}
        default:
            return state
    }
}