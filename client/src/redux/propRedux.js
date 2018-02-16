import axios from "axios";
const url = ""

export function getSomething() {
    return dispatch => {
        dispatch({
            type: "IS_LOADING"
        })
        axios.get(url)
            .then(response => {
                dispatch({
                    type: "GET_SOMETHING",
                    payload: response.data
                });
            });
    }
}
export function getById(id) {
    return function (dispatch) {
        axios.get(url + id, id)
            .then(response => {
                dispatch({
                    type: "GET_SINGLE_By_Id",
                    payload: response.data
                })
            })
    }
}
export function deletedSomething(id) {
    return function (dispatch) {
        axios.delete(url + id, id)
            .then(response => {
                dispatch({
                    type: "DELETE_SOMETHING",
                    id
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

const something = (prevState = [], action) => {
    switch (action.type) {
        case "GET_SOMETHING":
            return action.payload
        case "GET_SINGLE_By_Id":
            return prevState.filter((thing) => {
                console.log(thing)
                return thing._id === action.id
            })
            case "DELETE_SOMETHING":
            return prevState.filter((thing) => {
                return thing._id !== action.id;
            })

        default:
            return prevState;
    }
}


export default something;