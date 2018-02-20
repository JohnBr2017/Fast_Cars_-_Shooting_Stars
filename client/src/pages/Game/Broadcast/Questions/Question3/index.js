import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Question3 extends Component {
    render() {
        return (
            <div>
                <h1>Question 3?</h1>
                {/* {possibleAnswers.map((answer, i)=>{
                    return  */}
                    <Link to="/game/question4"
                    // answer={answer} key={i} correct={correct} 
                    > answer</Link>
                {/* })} */}
            </div>
        )
    }
}
export default Question3