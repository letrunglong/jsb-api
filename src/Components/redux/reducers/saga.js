import axios from 'axios';
import { ROOT_API_URL } from 'common/constants';
import { put, takeEvery } from 'redux-saga/effects'
import { TYPES } from '../constants';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* loginSagaAsync(){
    yield put({type:TYPES.AUTH_LOGIN_ASYNC})
}

export function* rootSaga(){
    yield takeEvery(TYPES.AUTH_LOGIN,loginSagaAsync)
}

function requestLogin(payload){
    return axios({
        url: `${ROOT_API_URL}/login`,
        method:"POST",
        headers:{

        }
    })
}