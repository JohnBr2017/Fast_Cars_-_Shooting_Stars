import React, { Component } from 'react'

class StartingLine extends Component {
    render() {
        let { game } = this.props
        return (
            <div>
                <h2>{game.game.data.raceData.sequence1.raceDescription}</h2>
            </div>
        )
    }
}
export default StartingLine