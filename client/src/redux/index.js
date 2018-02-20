import { combineReducers, createStore, applyMiddleware } from "redux";
import  Scoreboard  from "./scoreboard"
import game from "./game-data"

import thunk from "redux-thunk";

const store = createStore(
    combineReducers({ Scoreboard, game }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default store;

// import React, { Component } from 'react'

// export default class Redux extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             inputs: {
//                 "playerOne": '',
//                 "playerTwo": '',
//                 "playerThree": '',
//                 "playerFour": '',
//                 "playerFive": '',
//                 "players": ''
//             }
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleDelete = this.handleDelete.bind(this);
//         this.handleEdit = this.handleEdit.bind(this);
//     }

//     handleChange(e) {

//     }

//     handleSubmit(e) {

//     }

//     handleDelete(id) {

//     }

//     handleEdit(id, /*Something other*/) {

//     }

//     componentDidMount() {
//         axios.get(/*From our URL*/)
//             .then(response => {
//                 this.setState({
//                     //players probably isnt what we wil call it, but its there just incase
//                     players: response.data,
//                     loading: false
//                 })
//             })
//             .catch(err => {
//                 console.error(err);
//             })
//     }

//     clearInputs() {
//         this.setState({
//             inputs: {
//                 "playerOne": '',
//                 "playerTwo": '',
//                 "playerThree": '',
//                 "playerFour": '',
//                 "playerFive": '',
//                 "players": ''
//             }
//         })
//     }

//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }
