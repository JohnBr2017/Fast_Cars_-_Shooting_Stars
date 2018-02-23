// SCOREBOARD -- REDUCER
// ==============================

// IMPORT FROM PACKEAGES
import axios from "axios";

// VARIABLES
const scoreUrl = "/score/"

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