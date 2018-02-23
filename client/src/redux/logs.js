import axios from "axios";
let todoAxios = axios.create();

todoAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const SET_Logs = "SET_LOGS";
const logUrl = "/log/";

///////////////////////////
// Logs Action Creators //
///////////////////////////
function setLogs(logs) {
    return {
        type: SET_Logs,
        logs
    }
}

export function loadLogs() {
    return dispatch => {
        axios.get(logUrl)
            .then(response => {
                dispatch(setLogs(response.data));
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function addLogs(log) {
    return dispatch => {
        axios.post(logUrl, log)
            .then(response => {
                dispatch(loadLogs());
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function editLogs(id, log) {
    return dispatch => {
        axios.put(logUrl + id, log)
            .then(response => {
                dispatch(loadLogs());
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function deleteLogs(id){
    return dispatch => {
        axios.delete(logUrl + id)
            .then(response => {
                dispatch(loadLogs());
            })
            .catch(err => {
                console.error(err);
            })
    }
}


///////////////////
// Logs Reducer //
///////////////////
const initialLogs = [];

export default function logsReducer(logs = initialLogs, action) {
    switch (action.type) {
        case "SET_LOGS":
            return [...action.logs]
        case "LOGOUT":
            return initialLogs;
        default:
            return logs
    }
}