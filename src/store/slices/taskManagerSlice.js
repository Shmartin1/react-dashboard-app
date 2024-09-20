import { createSlice } from '@reduxjs/toolkit';

const taskManagerSlice = createSlice({
    name: 'tasks',
    initialState: {
        list:[],
        taskInput: ''
    },
    reducers: {
        addTask: (state) => {
            state.list.push({ id: state.list.length + 1, text: state.taskInput, completed: false });
            state.taskInput = '';
        },
        toggleTaskCompletion: (state, action) => {
            const task = state.list.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        setTaskInput: (state, action) => {
            state.taskInput = action.payload;
        },
    },
});

export const { addTask, toggleTaskCompletion, setTaskInput } = taskManagerSlice.actions;
export default taskManagerSlice.reducer;