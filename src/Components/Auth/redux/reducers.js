import * as types from "./constants";

const initialState = {
    userInfo: JSON.parse(localStorage.getItem("userInfor")) || {},
    dataOpenModalAuthy: null,
};

const updateUserInfoToLocal = (userInfo) => {
    localStorage.setItem("userInfor", JSON.stringify(userInfo));
};

export default function AuthReducer(state = initialState,action){
    const { payload } = action;
    return state;
}