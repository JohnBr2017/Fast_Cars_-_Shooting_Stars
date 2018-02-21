import React from 'react'
import { Link, Switch, Route } from "react-router-dom"

import Question1 from "./Questions/Question1"
import Question2 from "./Questions/Question2"
import Question3 from "./Questions/Question3"
import Question4 from "./Questions/Question4"
import Question5 from "./Questions/Question5"
import ScoreTally from "./ScoreTally"

function Broadcast() {
    return (
        <div>
        testing
            <Link to="/game/question1" >Start first question</Link>
            <Switch>
                <Route path="/game/question1" component={Question1} />
                <Route path="/game/question2" component={Question2} />
                <Route path="/game/question3" component={Question3} />
                <Route path="/game/question4" component={Question4} />
                <Route path="/game/question5" component={Question5} />
                <Route path="/game/scoretally" component={ScoreTally} />
            </Switch>
        </div>
    )
}

export default Broadcast
