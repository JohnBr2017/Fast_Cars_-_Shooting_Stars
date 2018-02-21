// GAME -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'
import { connect } from "react-redux";


// IMPORT FROM FILES
import Race from "./Race"
import { startGame, clearGame } from "../../redux/game-data"
import './Game.css';


let launchStyle = { display: 'block' };
let raceStyle = { display: 'none' }
class Game extends Component {
    constructor(props) {
        super(props);

        this.handleGoClick = this.handleGoClick.bind(this)
    }
    handleGoClick() {
        this.props.clearGame();
        this.props.startGame(this.props.game.data);
        raceStyle = { display: 'block' }
        launchStyle = { display: "none" }
    }
    render() {
        let game = this.props
        return (
            <div>
                <div style={launchStyle}>
                    Launchpad for start of race
                <p>HERE'S A BUNCH OF TEXT ABOUT H0W TO PLAY OUR GAME CLICK THE BUTTON WHEN YOU WANT, LINDA.</p>
                    <button onClick={this.handleGoClick}  >GO</button>
                </div>
                <div style={raceStyle}>
                    <Race game={game} ></Race>
                </div>
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
export default connect(mapStateToProps, { startGame, clearGame })(Game)

// make this a state component
// import the startGame action creator from redux
// 