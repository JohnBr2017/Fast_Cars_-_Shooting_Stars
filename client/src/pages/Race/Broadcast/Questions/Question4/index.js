import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Question4 extends Component {
    render() {
        return (
            <div>
                <h1>Question 4?</h1>
                {/* {possibleAnswers.map((answer, i)=>{
                    return  */}
                    <Link to="/race/question5"
                    // answer={answer} key={i} correct={correct} 
                    > answer</Link>
                {/* })} */}
            </div>
        )
    }
}
export default Question4