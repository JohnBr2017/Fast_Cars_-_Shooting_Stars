import React, { Component } from 'react'

import Broadcast from "./Broadcast"
import StartingLine from "./StartingLine"
import Spiral from "./Spiral"
import Plateau from "./Plateau"
import Beach from "./Beach"
import FinishLine from "./FinishLine"

class Race extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: true,
            spiral: false,
            plateau: false,
            beach: false,
            finish: false,
            broadcast: false
        }
        this.handleStartChange = this.handleStartChange.bind(this)
        this.handleSpiralChange = this.handleSpiralChange.bind(this)
        this.handlePlateauChange = this.handlePlateauChange.bind(this)
        this.handleBeachChange = this.handleBeachChange.bind(this)
        this.handleFinishChange = this.handleFinishChange.bind(this)
    }
    handleStartChange() {
        this.setState({
            start: !this.state.start,
            spiral: !this.state.spiral
        })
    }
    handleSpiralChange() {
        this.setState({
            spiral: !this.state.spiral,
            plateau: !this.state.plateau
        })
    }
    handlePlateauChange() {
        this.setState({
            plateau: !this.state.plateau,
            beach: !this.state.beach
        })
    }
    handleBeachChange() {
        this.setState({
            beach: !this.state.beach,
            finish: !this.state.finish
        })
    }
    handleFinishChange() {
        this.setState({
            finish: !this.state.finish,
            broadcast: !this.state.broadcast
        })
    }
    render() {
        let start = { display: this.state.start ? "block" : "none" };
        let spiral = { display: this.state.spiral ? "block" : "none" }
        let plateau = { display: this.state.plateau ? "block" : "none" }
        let beach = { display: this.state.beach ? "block" : "none" }
        let finish = { display: this.state.finish ? "block" : "none" }
        let broadcast = { display: this.state.broadcast ? "block" : "none" }
        let { game } = this.props
        return (
            <div>
                <div style={start}>
                    <StartingLine game={game} />
                    <button onClick={this.handleStartChange} > > </button>
                </div>
                <div style={spiral}>
                    <Spiral game={game} />
                    <button onClick={this.handleSpiralChange} > > </button>
                </div>
                <div style={plateau}>
                    <Plateau game={game} />
                    <button onClick={this.handlePlateauChange} > > </button>
                </div>
                <div style={beach}>
                    <Beach game={game} />
                    <button onClick={this.handleBeachChange} > > </button>
                </div>
                <div style={finish}>
                    <FinishLine game={game} />
                    <button onClick={this.handleFinishChange} > > </button>
                </div>
                <div style={broadcast}>
                    <Broadcast />
                </div>
            </div>
        )
    }
}
export default Race