import { configureStore } from "@reduxjs/toolkit";
import DetailsSubjectsReducer from "redux-toolkit/reducer/DetailsSubjectsReducer";
import LoginReducer from "redux-toolkit/reducer/LoginReducer";
import SubjectsReducer from "redux-toolkit/reducer/SubjectsReducer";

export const store = configureStore({
    reducer: {
        LoginReducer: LoginReducer,
        SubjectsReducer: SubjectsReducer,
        DetailsSubjectsReducer: DetailsSubjectsReducer

    }
})

export type AppDispatch = typeof store.dispatch; // Here we export the store's dispatch type
export type RootState = ReturnType<typeof store.getState>