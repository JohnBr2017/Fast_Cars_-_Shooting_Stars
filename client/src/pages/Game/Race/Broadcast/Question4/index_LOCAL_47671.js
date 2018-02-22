import React, { Component } from 'react'

class Question4 extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (e) => {
        let { value } = e.target;
        this.props.changeScore(value);
        console.log(this.props.score)
        this.props.pageChange()

    }

    render() {
        let game = this.props
        let text = game.game.game.data.questions.question4.text
        let answers = game.game.game.data.questions.question4.answers        
        // console.log(answers)
        return (
            <div>
                <h1>Question 4</h1>
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
export default Question4