import {call, put} from 'redux-saga/effects'
import axios from 'axios'

import {
    loginUrl,
    userParamsUrl,
    rootUrl
} from '../constans/serverApiUrl'
import {
    loginUserSuccess,
    getUserParams
} from "../ActionCreator/UserAction";

export function *loginSaga(loginUser) {
    try {
        const token = yield call(() => {
            const body = loginUser.payload;
            return axios.post(loginUrl, body)
                .then(response => response.data)
        });
        localStorage.setItem('token', JSON.stringify(token.key));
        yield put(getUserParams())
    }
    catch (e) {

    }
}

export function *getUserParamsSaga() {
    try {
        const userParams = yield call(() => {
            const head = {
                headers: {
                    Authorization: `Token ${JSON.parse(localStorage.getItem('token'))}`
                }
            }
            return axios.get(userParamsUrl, head)
                .then(response => response.data)
        })
        yield put(loginUserSuccess(userParams))

    }
    catch (e) {

    }
}

export function *logoutSaga() {
    try {
        yield call(() => {
            const head = {
                headers: {
                    Authorization: `Token ${JSON.parse(localStorage.getItem('token'))}`
                }
            }
            return axios.post(rootUrl + 'rest-auth/logout/', head)
                .then(response => response.data)
        })
        localStorage.removeItem("token")

    }
    catch (e) {

    }
}