// import React, { Component } from 'react';
// import { Link, Route, Switch } from "react-router-dom";

// import SignUp from '../../SignUp/SignUpForm';

// import './Sign.css';

// class SignUpIn extends Component {
//     render() {
//         return (
//             <div className="outerSign">
//                 <form className="signForm">
//                     <div className="innerSign">
//                         <h1>Login In</h1>
//                         <input type="text" placeholder="username" />
//                         <input type="password" placeholder="password" />
//                         <br />
//                         <button>Sign In</button>
//                         <br />
//                         <br />
//                         <br />
//                         <Link to="/SignUp" component={SignUp}>Sign Up</Link>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
// export default SignUpIn

import React, { Component } from 'react';
import LoginForm from "./LoginForm";

import {connect} from "react-redux";
import {login} from '../../../redux/auth';

class LoginFormContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                username: "",
                password: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state.inputs);
        this.clearInputs();
    }

    render() {
        return (
            <LoginForm
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                {...this.state.inputs} />
        )
    }
}

export default connect(null, {login})(LoginFormContainer)