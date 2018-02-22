import { combineReducers, createStore, applyMiddleware } from "redux";
import  Scoreboard  from "./scoreboard";
import thunk from "redux-thunk";

import game from "./game-data";
import user from './auth';

const reducer = combineReducers({
    game,
    user
})

const store = createStore(
    combineReducers({ Scoreboard, game }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default store;

