import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";

import './UserTeacher.css'
import Work from "../../containers/WorkTeacher/Work";
import WorkId from "../../containers/WorkTeacher/WorkId";
import ThemeStudent from "./ThemeStudent";


class UserTeacher extends Component {
    render() {
        return (
            <div className="user-teacher">
                <div className="nav-bar">
                    <Link to="/user/work"><span>Работы</span></Link>
                    <Link to="/user/themestudent"><span>Отклики</span></Link>
                </div>
                <div className="content">
                    <Route exact path='/user' component={Work}/>
                    <Route exact path='/user/work' component={Work}/>
                    <Route exact path='/user/work/:id' component={WorkId}/>
                    <Route exact path='/user/themestudent' component={ThemeStudent}/>
                </div>
            </div>
        )
    }
}

export default UserTeacher