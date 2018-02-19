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
export function getScoreById(id) {
    return function (dispatch) {
        axios.get(scoreUrl + id, id)
            .then(response => {
                dispatch({
                    type: "GET_SCORE_By_Id",
                    payload: response.data
                })
            })
    }
}
export function deletedScore(id) {
    return function (dispatch) {
        axios.delete(scoreUrl + id, id)
            .then(response => {
                dispatch({
                    type: "DELETE_SCORE",
                    id
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

const Scoreboard = (prevState = [], action) => {
    switch (action.type) {
        case "GET_SCORES":
            return action.payload
        case "GET_SCORE_By_Id":
            return prevState.filter((score) => {
                console.log(score)
                return score._id === action.id
            })
            case "DELETE_SCORE":
            return prevState.filter((score) => {
                return score._id !== action.id;
            })

        default:
            return prevState;
    }
}


export default Scoreboard;