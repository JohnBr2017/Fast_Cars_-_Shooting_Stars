// GAME -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'
import { connect } from "react-redux";

// IMPORT FROM FILES
import Broadcast from "./Broadcast";
import { startGame } from "../../redux/game-data"
import './Game.css';



class Game extends Component {
    constructor(props) {
        super(props);
        this.handleGoClick = this.handleGoClick.bind(this)
    }

    handleGoClick() {
        this.props.startGame(this.props.game.data)
        
    }

    render() {
        let { game } = this.props
        return (
            <div>
                Launchpad for start of race
                <p>HERE'S A BUNCH OF TEXT ABOUT H0W TO PLAY OUR GAME CLICK THE BUTTON WHEN YOU WANT, LINDA.</p>
                <button onClick={this.handleGoClick}  >GO</button>
                <Broadcast></Broadcast>
                {/* <Game ></Game> */}
            </div>
        )
    }
}

// EXPORTS
const mapStateToProps = (state) => {
    return {
        game: state.game
    }
}
export default connect(mapStateToProps, { startGame })(Game)

// make this a state component
// import the startGame action creator from redux
// 