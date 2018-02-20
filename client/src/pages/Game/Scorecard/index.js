import React, { Component } from 'react'

import { connect } from "react-redux";

import { getScore } from "../../../redux/scoreboard"


import "./Scorecard.css"

class Scorecard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "-----",
            score: "-----",
            // time: ""
        }
    }
    componentDidMount() {
        this.props.getScore()
    }
    render() {
        let { winnerList } = this.props
        return (
            <div className="scorecard">
                <h2 className="userTitle">Username</h2>
                <h2 className="scoreTitle">Score</h2>
                <div className="scores">
                {/* the .splice() is to make sure the max that can be shown is set to 5 */}
                    {winnerList.sort(function(a, b){return b.score - a.score}).slice(0, 5).map((winners, i) => {
                        let { username, score } = winners
                        return <div className="singleScore" key={i}> 
                            <p className="winnerName" >{username}</p>
                            <p className="winnerScore" >{score}</p>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        winnerList: state.Scoreboard,
    }
}

export default connect(mapStateToProps, { getScore })(Scorecard); 