import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  id: number;
  text: string;
  timestamp: string;
}

interface RecentMessagesState {
  messages: Message[];
  removingMessageIds: number[];
  reenteringMessageIds: number[];
}

const initialState: RecentMessagesState = {
  messages: [
    { id: 1, text: "New update available for the dashboard.", timestamp: "2 hours ago" },
    { id: 2, text: "Meeting scheduled at 3 PM today.", timestamp: "5 hours ago" },
    { id: 3, text: "New user signup: John Doe", timestamp: "1 day ago" }
  ],
  removingMessageIds: [],
  reenteringMessageIds: [],
};

export const recentMessagesSlice = createSlice({
  name: 'recentMessages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Omit<Message, 'id'>>) => {
      state.messages.unshift({ id: Date.now(), ...action.payload });
      if (state.messages.length > 5) {
        state.messages.pop();
      }
    },
    removeMessage: (state, action: PayloadAction<number>) => {
      state.messages = state.messages.filter(message => message.id !== action.payload);
    },
    setRemovingMessageId: (state, action: PayloadAction<number>) => {
      state.removingMessageIds.push(action.payload);
    },
    clearRemovingMessageId: (state, action: PayloadAction<number>) => {
      state.removingMessageIds = state.removingMessageIds.filter(id => id !== action.payload);
    },
    setReenteringMessageId: (state, action: PayloadAction<number>) => {
      state.reenteringMessageIds.push(action.payload);
    },
    clearReenteringMessageId: (state, action: PayloadAction<number>) => {
      state.reenteringMessageIds = state.reenteringMessageIds.filter(id => id !== action.payload);
    },
    reenterMessage: (state, action: PayloadAction<number>) => {
      const messageToReenter = initialState.messages.find(msg => msg.id === action.payload);
      if (messageToReenter) {
        state.messages.push(messageToReenter);
      }
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { 
  addMessage, 
  removeMessage, 
  setRemovingMessageId,
  clearRemovingMessageId,
  setReenteringMessageId,
  clearReenteringMessageId,
  reenterMessage,
  clearMessages 
} = recentMessagesSlice.actions;

export default recentMessagesSlice.reducer;