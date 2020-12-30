import * as types from "./constants";

export const postLogin  = (payload,redirect) => ({
    type: types.LOGIN,
    payload,
    redirect
})
export const loginSuccess  = (payload) => ({
    type: types.LOGIN_SUCCESS,
    payload
})