import React from 'react';

function SignupForm(props) {
    return (
        <div className="outerSign">
            <form className="signForm" onSubmit={props.handleSubmit}>
                <div className="innerSign">
                    <h3>Sign Up!</h3>
                    <input
                        onChange={props.handleChange}
                        value={props.username}
                        name="username"
                        type="text"
                        placeholder="Username" />
                    <br />
                    <input
                        onChange={props.handleChange}
                        value={props.password}
                        name="password"
                        type="password"
                        placeholder="Password" />
                    <br />
                    <button type="submit">Submit</button>
                </div> 
            </form>
        </div>
    )
}

export default SignupForm