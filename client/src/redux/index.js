import { combineReducers, createStore, applyMiddleware } from "redux";
<<<<<<< HEAD
import  Scoreboard  from "./scoreboard";
=======
import  scoreboard  from "./scoreboard"
import game from "./game-data"
import score from "./scorecard"

>>>>>>> 826590ff473dd4fd886ae463b5c46554c7bc8a97
import thunk from "redux-thunk";

import game from "./game-data";
import user from './auth';

const reducer = combineReducers({
    game,
    user
})

const store = createStore(
    combineReducers({ scoreboard, game, score }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default store;

<<<<<<< HEAD
=======

>>>>>>> 826590ff473dd4fd886ae463b5c46554c7bc8a97
