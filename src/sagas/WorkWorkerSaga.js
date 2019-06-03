import axios from "axios";
import {getWorkSuccess, getWorkIdSuccess, getWorkId} from "../ActionCreator/WorkAction";
import {call, put} from 'redux-saga/effects'
import {
    workUrl,
    workIdUrl,
    rootUrl
} from '../constans/serverApiUrl'

export function *getWorkSaga() {
    try {
        const work = yield call(() => {
            const head = {
                headers: {
                    Authorization: `Token ${JSON.parse(localStorage.getItem('token'))}`
                }
            }
            return axios.get(workUrl, head)
                .then(response => response.data)
        })
        yield put(getWorkSuccess(work))

    }
    catch (e) {

    }
}
export function *getWorkIdSaga(id) {
    try {
        const work = yield call(() => {
            const head = {
                headers: {
                    Authorization: `Token ${JSON.parse(localStorage.getItem('token'))}`
                }
            }
            return axios.get(workIdUrl+'?id=' + id.payload, head)
                .then(response => response.data)
        })
        yield put(getWorkIdSuccess(work))

    }
    catch (e) {

    }
}

export function *setPlaceSaga(place) {
    try {
        yield call(() => {
            const head = {
                headers: {
                    Authorization: `Token ${JSON.parse(localStorage.getItem('token'))}`
                }
            }
            const body = place.payload
            return axios.post(workIdUrl, body, head)
        })
        yield put(getWorkId(place.payload.id))

    }
    catch (e) {

    }
}

export function *addThemeSaga(action) {
    try {
        yield call(() => {
            const head = {
                headers: {
                    Authorization: `Token ${JSON.parse(localStorage.getItem('token'))}`
                }
            }
            const body = action.payload
            return axios.post(rootUrl + 'addtheme/', body, head)
        })
        yield put(getWorkId(action.payload.id))

    }
    catch (e) {

    }
}