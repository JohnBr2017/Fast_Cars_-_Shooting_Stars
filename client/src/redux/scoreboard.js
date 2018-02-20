import axios from "axios";
const scoreUrl = "http://localhost:8080/score/"

export function getScore() {
    return dispatch => {
        dispatch({
            type: "IS_LOADING"
        })
        axios.get(scoreUrl)
            .then(response => {
                dispatch({
                    type: "GET_SCORES",
                    payload: response.data
                });
            });
    }
}
export function addPlayerScore(newScore) {
    return function (dispatch) {
        axios.post(scoreUrl, newScore)
            .then(response => {
                console.log(response.data)
                dispatch({
                    type: "NEW_SCORE",
                    newPlayerScore: response.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
}
const Scoreboard = (prevState = [], action) => {
    switch (action.type) {
        case "GET_SCORES":
            return action.payload
        case "NEW_SCORE":
            return [...prevState, action.newPlayerScore];

        default:
            return prevState;
    }
}


export default Scoreboard;