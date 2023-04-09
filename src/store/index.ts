import { createStore, combineReducers } from "redux";
import { todosReducer } from "../reducers";
import { AppState } from "../types";

const rootReducer = combineReducers<AppState>({
    todos: todosReducer
});

export const store = createStore(rootReducer);