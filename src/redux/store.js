import {createStore}from "redux"
import { todoReducers } from "./reducers/todoReducers"

const store= createStore(
    todoReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())

export default store