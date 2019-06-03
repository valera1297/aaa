import React, {Component} from 'react';
import LoginForm from '../../containers/Login/LoginForm'

import './login.css'


class Login extends Component {
    render() {
        return(
           <div className="login">
               <LoginForm/>
           </div>
        )
    }
}

export default Login