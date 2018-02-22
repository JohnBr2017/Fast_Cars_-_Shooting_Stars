import React, { Component } from 'react'

class Question2 extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange=(e)=>{
        let {value}= e.target;
        this.props.pageChange()
    }

    render() {
        let game = this.props
        let text = game.game.game.data.questions.question2.text
        let answers = game.game.game.data.questions.question2.answers        
        // console.log(answers)
        return (
            <div>
                <h1>Question 2</h1>
                <h2>{text}</h2>
                {answers.map((singleAnswer, i)=>{
                    return (
                        <div key={i} onClick={this.handleChange} value={singleAnswer.correct} > {singleAnswer.answer}</div>
                    )
                })}
            </div>
        )
    }
}
export default Question2