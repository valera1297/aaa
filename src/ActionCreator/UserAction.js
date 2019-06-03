import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    GET_USER_PARAMS
} from "../constans/userAction";

export function loginUser(parms) {
    return {
        type: LOGIN_USER,
        payload: parms,
    }
}

export function loginUserSuccess(userParams) {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: userParams,
    }
}

export function getUserParams() {
    return {
        type: GET_USER_PARAMS,
    }
}