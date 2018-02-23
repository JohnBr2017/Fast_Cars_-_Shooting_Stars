import React, { Component } from 'react'

import { connect } from "react-redux";
import { changeScore, addPlayerScore } from "../../../../../redux/scorecard"

class Question5 extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (e) => {
        let { value } = e.target;
        this.props.changeScore(value);
        this.props.addPlayerScore(this.props.scoreObject)
        console.log( this.props.scoreObject)
        this.props.pageChange()

    }

    render() {
        let game = this.props
        let text = game.game.game.data.questions.question5.text
        let answers = game.game.game.data.questions.question5.answers        
        return (
            <div className="question">
                <h1>Question 5</h1>
                <h2>{text}</h2>
                {answers.map((singleAnswer, i)=>{
                    return (
                        <div key={i} className="questionButton" onClick={this.handleChange} value={singleAnswer.correct} >{singleAnswer.answer}</div>
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        score: state.score.value,
        scoreObject: state.score
    }
}
export default connect(mapStateToProps, { changeScore, addPlayerScore })(Question5)