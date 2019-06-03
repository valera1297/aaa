import React, {Component} from 'react';
import Work from "../../containers/WorkUser/Work";
import WorkId from "../../containers/WorkUser/workId";
import {Route, Link} from "react-router-dom";

class UserStudent extends Component {
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

export default UserStudent