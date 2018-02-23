// SCORECARD REDUCER 
// ==============================

// IMPORT FROM PACKEAGES
import axios from "axios";

// VARIABLES
const scoreUrl = "/score/"

/////////////////////
// ACTION CREATORS //
/////////////////////

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
        console.log("JIMMY MIA?")
        return {
            type: "CHANGE_SCORE",
            payload: 100
        } 
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
                value: action.payload,
                username: prevScore.usernmae
            }
        default:
            return prevScore;
    }
}
export default score;
