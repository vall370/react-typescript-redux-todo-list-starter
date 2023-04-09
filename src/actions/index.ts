import { AddTodoAction, ToggleTodoAction } from "../types";

export function addTodo(text: string): AddTodoAction {
    return {
        type: "ADD_TODO",
        payload: {
            text
        }
    };
}

export function toggleTodo(id: number): ToggleTodoAction {
    return {
        type: "TOGGLE_TODO",
        payload: {
            id
        }
    };
}