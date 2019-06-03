import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import Head from './containers/Head/Head'
import Login from './pages/Login/Login'
import {connect} from 'react-redux';
import UserTeacher from './pages/UserTeacher/UserTeacher'
import UserStudent from './pages/UserStudent/UserStudent'

class App extends Component {
    render() {
        const {
            login,
            isTeacher,
        } = this.props
        return (
            <Fragment>
                <Router>
                    <Head/>
                    {login
                        ? <Switch>
                            <Route exact path='/login' component={() => <Redirect to='/user'/>}/>
                            {isTeacher
                                ? <UserTeacher/>
                                : <Fragment>
                                    <Route path='/user' component={UserStudent}/>
                                </Fragment>
                            }
                        </Switch>
                        : <Switch>
                            <Route exact path='/login' component={Login}/>
                            <Route path='/' component={() => <Redirect to='/login'/>}/>
                        </Switch>
                    }
                </Router>
            </Fragment>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        login: store.UserReducer.login,
        isTeacher: store.UserReducer.userData.isTeacher,
    }
}

export default connect(
    mapStateToProps,
)(App)

