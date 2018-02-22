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
import { clearScore } from "../../redux/scorecard"
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
        this.props.clearScore();
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
                <p>Welcome to Fast Car & Shooting Stars! You are about to read a story of an exciting and whimsical race between 5 fun novelty themed cars! 
                Pay attention and after you're done we will ask you some questions to measure your enthusiasm about fictional races! Try to ge the highest score, and measure your self-worth by our approval. 
                Click "GO" to get started.</p>
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
export default connect(mapStateToProps, { startGame, clearGame, clearScore })(Game)

// make this a state component
// import the startGame action creator from redux
// 