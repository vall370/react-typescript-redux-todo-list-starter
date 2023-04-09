export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface AppState {
    todos: Todo[];
}

export interface AddTodoAction {
    type: "ADD_TODO";
    payload: {
        text: string;
    };
}

export interface ToggleTodoAction {
    type: "TOGGLE_TODO";
    payload: {
        id: number;
    };
}
export type TodoActionTypes = AddTodoAction | ToggleTodoAction;
