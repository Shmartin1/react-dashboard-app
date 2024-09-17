// src/store/slices/recentMessagesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [
    { id: 1, text: "New update available for the dashboard.", timestamp: "2 hours ago" },
    { id: 2, text: "Meeting scheduled at 3 PM today.", timestamp: "5 hours ago" },
    { id: 3, text: "New user signup: John Doe", timestamp: "1 day ago" }
  ],
};

export const recentMessagesSlice = createSlice({
  name: 'recentMessages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.unshift({ id: Date.now(), ...action.payload });
      if (state.messages.length > 5) {
        state.messages.pop();
      }
    },
    removeMessage: (state, action) => {
      state.messages = state.messages.filter(message => message.id !== action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, removeMessage, clearMessages } = recentMessagesSlice.actions;

export default recentMessagesSlice.reducer;