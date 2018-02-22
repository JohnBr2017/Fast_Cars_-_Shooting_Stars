import React, { Component } from 'react'
import {connect} from "react-redux"

class ScoreTally extends Component {
    render() {
        let score =  this.state
        // let game = this.props
        
        return (
            <div>
                <h3>score tally for each correct answer</h3>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        score: state.score.value
    }
}
export default connect(mapStateToProps, { })(ScoreTally)