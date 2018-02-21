import React, { Component } from 'react'

import Question1 from "./Question1"
import Question2 from "./Question2"
import Question3 from "./Question3"
import Question4 from "./Question4"
import Question5 from "./Question5"
import ScoreTally from "./ScoreTally"

class Broadcast extends Component {
    constructor(props){
        super(props)
        this.state = {
            quest1: true,
            quest2: false,
            quest3: false,
            quest4: false,
            quest5: false,
            score: false
        }
        this.handleQuest1Change = this.handleQuest1Change.bind(this)
        this.handleQuest2Change = this.handleQuest2Change.bind(this)
        this.handleQuest3Change = this.handleQuest3Change.bind(this)
        this.handleQuest4Change = this.handleQuest4Change.bind(this)
        this.handleQuest5Change = this.handleQuest5Change.bind(this)
    }
    handleQuest1Change(){
        this.setState({
            quest1: !this.state.quest1,
            quest2: !this.state.quest2
        })
    }
    handleQuest2Change(){
        this.setState({
            quest2: !this.state.quest2,
            quest3: !this.state.quest3
        })
    }
    handleQuest3Change(){
        this.setState({
            quest3: !this.state.quest3,
            quest4: !this.state.quest4
        })
    }
    handleQuest4Change(){
        this.setState({
            quest4: !this.state.quest4,
            quest5: !this.state.quest5
        })
    }
    handleQuest5Change(){
        this.setState({
            quest5: !this.state.quest5,
            score: !this.state.score
        })
    }
    render() {
        let quest1 = { display: this.state.quest1 ? "block" : "none" };
        let quest2 = { display: this.state.quest2 ? "block" : "none" }
        let quest3 = { display: this.state.quest3 ? "block" : "none" }
        let quest4 = { display: this.state.quest4 ? "block" : "none" }
        let quest5 = { display: this.state.quest5 ? "block" : "none" }
        let score = { display: this.state.score ? "block" : "none" }
        let { game } = this.props
    
        return (
            <div>
                <div style={quest1} >
                    <Question1 game={game} />
                    <button onClick={this.handleQuest1Change} > &rarr; </button>
                </div>
                <div style={quest2}>
                    <Question2 game={game}/>
                    <button onClick={this.handleQuest2Change} > &rarr; </button>
                </div>
                <div style={quest3}>
                    <Question3 game={game}/>
                    <button onClick={this.handleQuest3Change} > &rarr; </button>
                </div>
                <div style={quest4}>
                    <Question4 game={game}/>
                    <button onClick={this.handleQuest4Change} > &rarr; </button>
                </div>
                <div style={quest5}>
                    <Question5 game={game}/>
                    <button onClick={this.handleQuest5Change} > &rarr; </button>
                </div>
                <div style={score}>
                    <ScoreTally game={game}/>
                </div>
            </div>
        )
    }
}

export default Broadcast
