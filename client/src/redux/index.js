import { combineReducers, createStore, applyMiddleware } from "redux";
import  scoreboard  from "./scoreboard"
import game from "./game-data"
import score from "./scorecard"

import thunk from "redux-thunk";
import user from './auth';



