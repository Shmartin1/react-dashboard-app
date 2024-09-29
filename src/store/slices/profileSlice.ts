import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import headshot from '../../assets/images/josh_martin_headshot.jpg';

interface ProfileState {
    name: string;
    headshotUrl: string;
}

const initialState: ProfileState = {
    name: 'Joshua Martin',
    headshotUrl: headshot,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        updatePictureUrl: (state, action: PayloadAction<string>) => {
            state.headshotUrl = action.payload;
        }
    },
});

export const { updateName, updatePictureUrl } = profileSlice.actions;
export default profileSlice.reducer;