// GAME -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'
import { connect } from "react-redux";


// IMPORT FROM FILES
import Race from "./Race"
// import Scorecard from "./Scorecard"
// import CarProfiles from "./CarProfiles"
import { startGame, clearGame } from "../../redux/game-data"
import './Game.css';


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            launch: true,
            race: false
        }

        this.handleGoClick = this.handleGoClick.bind(this)
    }
    handleGoClick() {
        this.props.clearGame();
        this.props.startGame(this.props.game.data);
        this.setState({
            launch: !this.state.launch,
            race: !this.state.race
        })
    }
    render() {
        let launch = { display: this.state.launch ? "block" : "none" };
        let race = { display: this.state.race ? "block" : "none" }
        let game = this.props
        return (
            <div>
                <div className='raceBackground'>
                    <div style={launch}>
                        Launchpad for start of race
                <p>HERE'S A BUNCH OF TEXT ABOUT H0W TO PLAY OUR GAME CLICK THE BUTTON WHEN YOU WANT, LINDA.</p>
                        <button className="goButton" onClick={this.handleGoClick}  >GO</button>
                    </div>
                    <div style={race}>
                        <Race game={game} ></Race>
                    </div>
                </div>
                {/* <div className="scorecard">
                    <ScoreBoard />
                </div>
                <div>
                    <CarProfiles></CarProfiles>
                </div> */}
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