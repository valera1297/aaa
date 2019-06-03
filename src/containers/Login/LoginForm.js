import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loginUser} from '../../ActionCreator/UserAction'


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.usernameInput = React.createRef();
        this.passwordInput = React.createRef();
    }

    entry = (event) => {
        event.preventDefault();
        this.props.login({
            username: this.passwordInput.current.value,
            password: this.usernameInput.current.value,
        })
    }

    render() {
        return (
            <form
                onSubmit={this.entry}
                className="login__login-form"
            >
                <div>
                    <label>
                        <span>username:</span>
                        <input
                            type="text"
                            ref={this.usernameInput}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <span>password:</span>
                        <input
                            type="password"
                            ref={this.passwordInput}
                        />
                    </label>
                </div>
                <button type="submit">Log In</button>
            </form>

        )
    }
}

const mapStateToProps = (store) => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        login: (params) => dispatch(loginUser(params))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)
