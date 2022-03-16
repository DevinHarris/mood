import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

export const getMood = createAsyncThunk('mood/getMood', async (id) => {
    const res  = await api.get(`/mood/${id}`);
    return res.data;
})

const moodSlice = createSlice({
    name: 'mood',
    initialState: {
        moods: [],
        mood: []
    },

    reducers: {
        incrementLikes: (state, action) => {
            state.mood.likes += 1;
        },

        incrementDislikes: (state, action) => {
            state.mood.dislikes += 1;
        },

        addMood: (state, action) => {

            const { payload } = action;
            state.moods.push(payload);
        }
    },

    extraReducers: {
        [getMood.fulfilled]: (state, { payload }) => {

            state.mood = payload;
        }
    }
})

export default moodSlice.reducer;