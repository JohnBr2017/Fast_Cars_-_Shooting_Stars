import axios from "axios";

export function signup(userInfo) {
    return dispatch => {
        axios.post("/auth/signup", userInfo)
            .then(response => {
                const { token, user } = response.data;
                localStorage.token = token
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user));
                //console.log(response.data);
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function authenticate(user) {
    return {
        type: "AUTHENTICATE",
        user
    }
}

const initialState = {
    username: "",
    isAdmin: false,
    isAuthenticated: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                ...action.user,
                isAuthenticated: true
            }
        case "LOGOUT":
            return initialState;
        default:
            return state;
    }
}

export function login(credentials) {
    return dispatch => {
        axios.post("/auth/login", credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.token = token
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user));
            })
            .catch((err) => {
                console.error(err);
            });
    }
}

export function logout() {
    delete localStorage.token;
    delete localStorage.user;
    return {
        type: "LOGOUT"
    }
}