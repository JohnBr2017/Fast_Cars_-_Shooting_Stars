import React, { Component } from 'react'

class Question2 extends Component {
    render() {
        let game = this.props
        return (
            <div>
                <h1>Question 2</h1>
                <h2>{game.game.game.data.questions.question2.text}</h2>
                {/* {possibleAnswers.map((answer, i)=>{
                    return 
                <p answer={answer} key={i} correct={correct} > answer</p>
                })} */}
            </div>
        )
    }
}
export default Question2