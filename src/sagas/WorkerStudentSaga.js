import axios from "axios";
import {rootUrl} from "../constans/serverApiUrl";
import {call, put} from 'redux-saga/effects'
import {getWorkId} from "../ActionCreator/WorkAction";

export function* getWorkStudentSaga() {
    try {
        const work = yield call(() => {
            const head = {
                headers: {
                    Authorization: `Token ${JSON.parse(localStorage.getItem('token'))}`
                }
            }
            return axios.get(rootUrl + 'workstudent/', head)
                .then(response => response.data)
        })
        yield put({type: "GET_WORK_STUDENT_SUCCESS", payload: work})

    } catch (e) {

    }
}

export function* getWorkIdStudentSaga(action) {
    try {
        const work = yield call(() => {
            const head = {
                headers: {
                    Authorization: `Token ${JSON.parse(localStorage.getItem('token'))}`
                }
            }
            return axios.get(rootUrl + 'workidstudent/?id=' + action.payload, head)
                .then(response => response.data)
        })
        yield put({type: "GET_WORK_STUDENT_ID_SUCCESS", payload: work})

    } catch (e) {

    }
}

export function* assementStudentSaga(action) {
    try {
        console.log(action)
        yield call(() => {
            const head = {
                headers: {
                    Authorization: `Token ${JSON.parse(localStorage.getItem('token'))}`
                }
            }
            return axios.post(rootUrl + 'assessmentstudent/', action.payload, head)
                .then(response => response.data)
        })
        yield put({type: "GET_WORK_ID_STUDENT", payload: action.payload.WorkId})

    } catch (e) {

    }
}