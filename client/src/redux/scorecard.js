// SCORECARD REDUCER 
// ==============================

// IMPORT FROM PACKEAGES
import axios from "axios";

// VARIABLES
const scoreUrl = "/score/"

/////////////////////
// ACTION CREATORS //
/////////////////////

/////////////
// REDUCER //
/////////////
export const clearScore = () => {
    return {
        type: "CLEAR_SCORE",
        payload: 0
    }
}

export const changeScore = (boolean) =>{
    if (boolean) {
        return {
            type: "CHANGE_SCORE",
            payload: 200
        }
    } else {
        return {
            type: "CHANGE_SCORE",
            payload: 0
        } 
    }
}

/////////////
// REDUCER //
/////////////

const score = (prevScore = { value: 0, username: "" }, action) => {
    switch (action.type) {
        case "CHANGE_SCORE":
            return {
                value: (prevScore.value + action.payload),
                username: prevScore.usernmae
            }
        case "CLEAR_SCORE":
            return {
                value: action.payoad,
                username: prevScore.usernmae
            }
        default:
            return prevScore;
    }
}
export default score;
