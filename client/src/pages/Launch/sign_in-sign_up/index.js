import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";

import SignUp from '../../SignUp/SignUpForm';

import './Sign.css';

class SignUpIn extends Component {
    render() {
        return (
            <div className="outerSign">
                <form className="signForm">
                    <div className="innerSign">
                        <h1>Login In</h1>
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <br />
                        <button>Sign In</button>
                        <br />
                        <br />
                        <br />
                        {/* <button>Sign Up</button> */}
                        <Link to="/SignUp" component={SignUp}>Sign Up</Link>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignUpIn