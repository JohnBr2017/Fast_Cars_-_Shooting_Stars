import React, { Component } from 'react'
import {connect} from "react-redux"

class ScoreTally extends Component {
    render() {
        console.log(this.props)
        
        return (
            <div>
                <h3>Here's how well ya did! Your score is:</h3>
                <h1>{this.props.score}</h1>
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