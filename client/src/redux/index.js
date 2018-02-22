import { combineReducers, createStore, applyMiddleware } from "redux";
import  scoreboard  from "./scoreboard"
import game from "./game-data"
import score from "./scorecard"

import thunk from "redux-thunk";

const store = createStore(
    combineReducers({ scoreboard, game, score }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default store;


