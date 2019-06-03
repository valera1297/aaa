import React, {Component} from 'react';
import {connect} from 'react-redux';

import logo from '../../../public/mem.jpg'

import {
    getUserParams
} from "../../ActionCreator/UserAction";
import {Link} from "react-router-dom";

import './header.css'


class Head extends Component {
    componentDidMount() {
        this.props.getUserParams();
    }

    logout = (event) => {
        event.preventDefault();
        this.props.logout({type: "LOGOUT"})
    }

    render() {
        const {
            login,
            userData
        } = this.props;
        return (
            <header className={`header ${login ? 'header_login' : 'header_logout'}`}>
                <img
                    src={logo}
                    alt="logo"
                    className="header__logo"
                />
                {
                    login
                    && <div>
                        <Link to="/user">
                        <span className="header__user-data">
                        {`${userData.first_name} ${userData.last_name} ${userData.patronymic}`}
                        </span>
                        </Link>
                        <button onClick={this.logout}>logout</button>
                    </div>
                }
            </header>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        userData: store.UserReducer.userData,
        login: store.UserReducer.login,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserParams: () => dispatch(getUserParams()),
        logout: (action) => dispatch(action)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Head)