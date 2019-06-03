import {
    GET_WORK_SUCCESS,
    GET_WORK_ID_SUCCESS
} from "../constans/WorkAction";

const initialState = {
    work: [],
    workid: '',
}

export function WorkTeacherReducer(state = initialState, action) {
    switch (action.type) {
        case GET_WORK_SUCCESS:
            return {...state, work: action.payload}
            break;
        case GET_WORK_ID_SUCCESS:
            return {...state, workid: action.payload}
            break;
        default:
            return state;
            break;
    }
}
