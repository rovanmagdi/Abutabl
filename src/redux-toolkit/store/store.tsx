import { configureStore } from "@reduxjs/toolkit";
import GamesReducer from "redux-toolkit/reducer/GamesReducer";
import LessonReducer from "redux-toolkit/reducer/LessonReducer";
import LoginReducer from "redux-toolkit/reducer/LoginReducer";
import SubjectsReducer from "redux-toolkit/reducer/SubjectsReducer";


export const store = configureStore({
    reducer: {
        LoginReducer: LoginReducer,
        SubjectsReducer: SubjectsReducer,
        LessonReducer: LessonReducer,
        GamesReducer: GamesReducer,

    }
})

export type AppDispatch = typeof store.dispatch; // Here we export the store's dispatch type
export type RootState = ReturnType<typeof store.getState>