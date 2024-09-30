import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import headshot from '../../assets/images/josh_martin_headshot.jpg';

interface ProfileState {
    name: string;
    title: string;
    headshotUrl: string;
}

const initialState: ProfileState = {
    name: 'Joshua Martin',
    title: 'Software Development Engineer',
    headshotUrl: headshot,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        updateTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        updatePictureUrl: (state, action: PayloadAction<string>) => {
            state.headshotUrl = action.payload;
        }
    },
});

export const { updateName, updateTitle, updatePictureUrl } = profileSlice.actions;
export default profileSlice.reducer;