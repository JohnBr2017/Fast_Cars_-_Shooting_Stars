import React, { Component } from 'react'

class ScoreTally extends Component {
    render() {
        let game = this.props
        // console.log(game.game.game.data.scoreCard)
        return (
            <div>
                <h3>score tally for each correct answer</h3>
                {/* <h2>{game.game.game.data.scoreCard}</h2> */}
            </div>
        )
    }
}
export default ScoreTally