import React, { Component } from 'react'

class Spiral extends Component {
    render() {
        let { game } = this.props
        return (
            <div>
                <h2>{game.game.data.raceData.sequence2.raceDescription}</h2>
            </div>
        )
    }
}
export default Spiral