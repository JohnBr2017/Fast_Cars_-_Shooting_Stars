import React, { Component } from 'react'

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