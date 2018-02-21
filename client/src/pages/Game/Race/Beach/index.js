import React, { Component } from 'react'

class Beach extends Component {
    render() {
        let { game } = this.props
        return (
            <div>
                <h2>{game.game.data.raceData.sequence4.raceDescription}</h2>
            </div>
        )
    }
}
export default Beach