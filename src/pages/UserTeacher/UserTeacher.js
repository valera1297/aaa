import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";

import './UserTeacher.css'
import Work from "../../containers/WorkTeacher/Work";
import WorkId from "../../containers/WorkTeacher/WorkId";


class UserTeacher extends Component {
    render() {
        return (
            <div className="user-teacher">
                <div className="nav-bar">
                    <Link to="/user/work"><span>Работы</span></Link>
                </div>
                <div className="content">
                    <Route exact path='/user' component={Work}/>
                    <Route exact path='/user/work' component={Work}/>
                    <Route exact path='/user/work/:id' component={WorkId}/>
                </div>
            </div>
        )
    }
}

export default UserTeacher