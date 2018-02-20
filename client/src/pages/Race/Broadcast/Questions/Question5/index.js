import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Question5 extends Component {
    render() {
        return (
            <div>
                <h1>Question 5?</h1>
                {/* {possibleAnswers.map((answer, i)=>{
                    return  */}
                    <Link to="/race/scoretally"
                    // answer={answer} key={i} correct={correct} 
                    > answer</Link>
                {/* })} */}
            </div>
        )
    }
}
export default Question5