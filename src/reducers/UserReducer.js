import {
    LOGIN_USER_SUCCESS
} from "../constans/userAction";

const initialState = {
    login: false,
    userData: {isTeacher:false},
    resume: false,
}

export function UserReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {...state, login: true, userData: action.payload}
            break;
        case "LOGOUT":
            return {...state, ...initialState}
        case "GET_RESUME_SUCCESS":
            return{...state, resume: action.payload}

        default:
            return state;
            break;
    }
}


