import React, { Component } from 'react'

class Plateau extends Component {
    render() {
        let { game } = this.props
        return (
            <div>
                <h2>{game.game.data.raceData.sequence3.raceDescription}</h2>
            </div>
        )
    }
}
export default Plateau