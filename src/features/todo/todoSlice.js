// todoSlice.jsx file
import { createSlice, nanoid } from '@reduxjs/toolkit';
    
export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [{ id: 1, text: "Mahesh Choudhary: - https://www.linkedin.com/in/mahesh-choudhary-356785284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }]
    },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        Updatetodo: (state, action) => {
            
            const { id, text } = action.payload;
            const updatedTodos = state.todos.map((todo) =>
              todo.id === id ? { ...todo, text } : todo
            );
            state.todos = updatedTodos;
          },

          removeAll: (state, action) => {
            state.todos = [];
        },
          
    }
});

export const { addTodo, removeTodo, Updatetodo,removeAll } = todoSlice.actions;

export default todoSlice.reducer;
