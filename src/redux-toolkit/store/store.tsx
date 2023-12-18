import { configureStore } from "@reduxjs/toolkit";
import DetailsSubjectsReducer from "redux-toolkit/reducer/DetailsSubjectsReducer";
import LoginReducer from "redux-toolkit/reducer/LoginReducer";
import SubjectsReducer from "redux-toolkit/reducer/SubjectsReducer";
import UnitsReducer from "redux-toolkit/reducer/UnitsReducer";

export const store = configureStore({
    reducer: {
        LoginReducer: LoginReducer,
        SubjectsReducer: SubjectsReducer,
        DetailsSubjectsReducer: DetailsSubjectsReducer,
        UnitsReducer: UnitsReducer

    }
})

export type AppDispatch = typeof store.dispatch; // Here we export the store's dispatch type
export type RootState = ReturnType<typeof store.getState>