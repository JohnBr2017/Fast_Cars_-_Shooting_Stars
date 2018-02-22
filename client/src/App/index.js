import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
//Navbar
import Navbar from "./navbar"
//Pages
import Launcher from "../pages/launch"
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Game from "../pages/Game";


export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Launcher} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path='/game' component={Game} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </div>
        )
    }
}
