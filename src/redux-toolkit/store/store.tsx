import { configureStore } from "@reduxjs/toolkit";
import GamesReducer from "redux-toolkit/reducer/GamesReducer";
import LessonReducer from "redux-toolkit/reducer/LessonReducer";
import LoginReducer from "redux-toolkit/reducer/LoginReducer";
import QuizReducer from "redux-toolkit/reducer/QuizReducer";
import QuizzesReducer from "redux-toolkit/reducer/QuizzesReducer";
import SubjectsReducer from "redux-toolkit/reducer/SubjectsReducer";
import todoReducer from "redux-toolkit/reducer/todoReducer";


export const store = configureStore({
    reducer: {
        LoginReducer: LoginReducer,
        SubjectsReducer: SubjectsReducer,
        LessonReducer: LessonReducer,
        GamesReducer: GamesReducer,
        QuizReducer: QuizReducer,
        todoReducer: todoReducer,
        QuizzesReducer: QuizzesReducer,

    }
})

export type AppDispatch = typeof store.dispatch; // Here we export the store's dispatch type
export type RootState = ReturnType<typeof store.getState>