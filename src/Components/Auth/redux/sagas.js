import * as types from "./constants";
import * as actions from "./actions";
import Cookies, { get } from "js-cookie";
import axios from 'axios';

import {
    ROOT_API_URL,
    USER_INFO_KEY
} from 'common/constants'
import { all, call, put, takeLatest } from "redux-saga/effects";

const setSession = (token, redirectCallback = () => null) => {
    // process.env.NODE_ENV === "development" && Cookies.set("token", token);
    Cookies.set("token", token);
    setTimeout(redirectCallback(), 100);
};

function* onLogin({payload, redirect}) {
    try{
        const { data } = yield call(requestLogin, payload);
        if(get(data,"status_code") === 200){
            const user = data?.data || {};
            if(user.email){
                setSession(get(data,"data.token"),redirect);

                localStorage.setItem(USER_INFO_KEY,JSON.stringify(data.data));
                yield put(actions.loginSuccess(data.data));
                return;
            }
        }
    } catch (err)   {}
}

export default function* rootSaga() {
    yield all([
        takeLatest(types.LOGIN,onLogin)
    ])
}

// Request API
function requestLogin(payload) {
    return axios({
            url: `${ROOT_API_URL}/login`,
            method: "POST",
            data: JSON.stringify(payload),
        }).then((data)=>{
            return data;
        });
}