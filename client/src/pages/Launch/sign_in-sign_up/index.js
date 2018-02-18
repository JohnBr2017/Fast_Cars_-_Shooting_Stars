import React, { Component } from 'react';

import './Sign.css';

class SignUpIn extends Component {
    render() {
        return (
            <form >
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>Sign Up</button>
                <button>Sign In</button>
            </form>
        )
    }
}
export default SignUpIn