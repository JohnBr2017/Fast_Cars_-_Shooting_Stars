import React, { Component } from 'react'

class FinishLine extends Component {
    render() {
        let { game } = this.props
        return (
            <div>
                <h2>{game.game.data.raceData.sequence5.raceDescription}</h2>
            </div>
        )
    }
}
export default FinishLine