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
                    {isAuthenticated ? <div className="navlinkz"><Link to="/Home" >Home</Link></div> : null}
                    {isAuthenticated ? <div className="navlinkz"><Link to="/Game" >Race</Link></div> : null}
                    {isAuthenticated ? <div className="navlinkz"><Link to="/About">About</Link></div> : null}
                    <div className="navlinkz"><Link to="/Contact">Contact</Link></div>
                    {isAuthenticated ? null : <div className="navlinkz"><Link to="/login">Login</Link></div>}
                    {isAuthenticated ? <div className="navlinkz">
                        <button onClick={this.props.logout}>Logout</button>
                    </div> : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.user;
}

export default connect(mapStateToProps, { logout })(Navbar); 