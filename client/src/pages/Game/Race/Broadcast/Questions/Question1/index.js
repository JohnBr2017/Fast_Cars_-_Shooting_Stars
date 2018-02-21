import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Question1 extends Component {
    render() {
        return (
            <div>
                <h1>Question 1?</h1>
                {/* {possibleAnswers.map((answer, i)=>{
                    return  */}
                <Link to="/game/question2"
                // answer={answer} key={i} correct={correct} 
                > answer</Link>
                {/* })} */}
            </div>
        )
    }
}
export default Question1