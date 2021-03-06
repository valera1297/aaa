import {takeEvery, all} from 'redux-saga/effects'

import {
    LOGIN_USER,
    GET_USER_PARAMS
} from "../constans/userAction";

import {
    GET_WORK,
    GET_WORK_ID,
    SET_PLACE,
} from "../constans/WorkAction";
import {
    loginSaga,
    getUserParamsSaga,
    logoutSaga
} from "./UserWorkerSaga"
import {
    getWorkSaga,
    getWorkIdSaga,
    setPlaceSaga,
    addThemeSaga,
    getThemeStudentSaga,
    assementTeacherSaga
} from "./WorkWorkerSaga"
import {
    getWorkStudentSaga,
    getWorkIdStudentSaga,
    assementStudentSaga,
    resumeGetSaga,
    resumePostSaga
} from "./WorkerStudentSaga"

export function* WatcherSaga() {
    try {
        yield all([
            takeEvery(LOGIN_USER, loginSaga),
            takeEvery(GET_USER_PARAMS, getUserParamsSaga),
            takeEvery(GET_WORK, getWorkSaga),
            takeEvery(GET_WORK_ID, getWorkIdSaga),
            takeEvery(SET_PLACE, setPlaceSaga),
            takeEvery("ADD_THEME", addThemeSaga),
            takeEvery("LOGOUT", logoutSaga),
            takeEvery("GET_WORK_STUDENTS", getWorkStudentSaga),
            takeEvery("GET_WORK_ID_STUDENT", getWorkIdStudentSaga),
            takeEvery("STUDENT_ASSEMENT", assementStudentSaga),
            takeEvery("GET_RESUME", resumeGetSaga),
            takeEvery("POST_RESUME", resumePostSaga),
            takeEvery("GET_THEME_STUDENT", getThemeStudentSaga),
            takeEvery("TEACHER_ASSEMENT", assementTeacherSaga),
        ])
    } catch (e) {
        console.log(e)

    }
}
