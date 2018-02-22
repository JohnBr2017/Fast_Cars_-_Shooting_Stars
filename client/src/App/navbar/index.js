import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/auth";

import './Nav.css';

class Navbar extends Component {
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="outer">
                <div className="navDiv">
                    <div className="navlinkz"><Link to="/Home" >Home</Link></div>
                    <div className="navlinkz"><Link to="/Game" >Race</Link></div>
                    <div className="navlinkz"><Link to="/About">About</Link></div>
                    <div className="navlinkz"><Link to="/Contact">Contact</Link></div>
                    <div className="navlinkz"><Link to="/login">Login</Link></div>
                    <div className="navlinkz">
                        <button onClick={this.props.logout}>Logout</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.user;
}

export default connect(null, { logout })(Navbar); 