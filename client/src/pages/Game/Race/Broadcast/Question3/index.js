import React, { Component } from 'react'

import { connect } from "react-redux";
import { changeScore } from "../../../../../redux/scorecard"

class Question3 extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (e) => {
        let { value } = e.target;
        this.props.changeScore(value);
        this.props.pageChange()

    }

    render() {
        let game = this.props
        let text = game.game.game.data.questions.question3.text
        let answers = game.game.game.data.questions.question3.answers        
        // console.log(answers)
        return (
            <div className="question">
                <h1>Question 3</h1>
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
        score: state.score.value
    }
}
export default connect(mapStateToProps, { changeScore })(Question3)