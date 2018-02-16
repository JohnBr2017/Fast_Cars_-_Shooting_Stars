import { combineReducers, createStore, applyMiddleware } from "redux";


// import filter from "./filter"
import thunk from "redux-thunk";

const store = createStore(
    combineReducers({   }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default store;