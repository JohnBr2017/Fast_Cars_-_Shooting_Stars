import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
//Navbar
import Navbar from "./Navbar"
//Pages
import Launcher from "../pages/Launch"
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Game from "../pages/Game";


export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/login' component={Launcher} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path='/game' component={Game} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </div>
        )
    }
}
