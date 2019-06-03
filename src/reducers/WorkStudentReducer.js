
const initialState = {
    work: [],
    workid: [],
}

export function WorkStudentReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_WORK_STUDENT_SUCCESS':
            return {...state, work: action.payload}
            break;
        case 'GET_WORK_STUDENT_ID_SUCCESS':
            return {...state, workid: action.payload}
            break;
        default:
            return state;
            break;
    }
}