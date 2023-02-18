import { createSlice } from "@reduxjs/toolkit";
import { v4 } from 'uuid';

const todoSlisce = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: v4(),
                text: action.payload.text,
                isCompleted: false,
            })
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        toggleTodoComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.isCompleted = !toggledTodo.isCompleted;
        },
    }
});

export const { addTodo, deleteTodo, toggleTodoComplete } = todoSlisce.actions;
export default todoSlisce.reducer;