import { configureStore } from '@reduxjs/toolkit';
import moodSlice from "../components/moodSlice";

export default configureStore({
    reducer: {
        mood: moodSlice
    }
})