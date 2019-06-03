import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {UserReducer} from '../reducers/UserReducer'
import {WorkTeacherReducer} from '../reducers/WorkTeacherReducer'
import {WorkStudentReducer} from '../reducers/WorkStudentReducer'
import createSagaMiddleware from 'redux-saga'
import {WatcherSaga} from '../sagas/WatcherSaga'


const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers(
    {
        UserReducer,
        WorkTeacherReducer,
        WorkStudentReducer,

    });
export const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware), window.devToolsExtension
    ? window.devToolsExtension() : f => f));
sagaMiddleware.run(WatcherSaga);
