import {
    GET_WORK_SUCCESS,
    GET_WORK,
    GET_WORK_ID,
    GET_WORK_ID_SUCCESS,
    SET_PLACE
} from "../constans/WorkAction";

export function getWork() {
    return {
        type: GET_WORK,
    }
}

export function getWorkSuccess(work) {
    return {
        type: GET_WORK_SUCCESS,
        payload: work,
    }
}

export function getWorkId(id) {
    return {
        type: GET_WORK_ID,
        payload: id,
    }
}

export function getWorkIdSuccess(workId) {
    return {
        type: GET_WORK_ID_SUCCESS,
        payload: workId,
    }
}

export function setPlace(place) {
    return {
        type: SET_PLACE,
        payload: place,
    }
}