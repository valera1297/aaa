import React, {Component} from 'react';
import Work from "../../containers/WorkUser/Work";
import WorkId from "../../containers/WorkUser/workId";
import {Route, Link} from "react-router-dom";
import Resume from "./StudentResume"

class UserStudent extends Component {
    render() {
        return (
            <div className="user-teacher">
                <div className="nav-bar">
                    <Link to="/user/work"><span>Работы</span></Link>
                    <Link to="/user/resume"><span>Резюме</span></Link>
                </div>
                <div className="content">
                    <Route exact path='/user' component={Work}/>
                    <Route exact path='/user/work' component={Work}/>
                    <Route exact path='/user/work/:id' component={WorkId}/>
                    <Route exact path='/user/resume' component={Resume}/>
                </div>
            </div>
        )
    }
}

export default UserStudent