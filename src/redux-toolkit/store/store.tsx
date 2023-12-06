import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "redux-toolkit/reducer/LoginReducer";
import SubjectsReducer from "redux-toolkit/reducer/SubjectsReducer";

export const store = configureStore({
    reducer: {
        LoginReducer: LoginReducer,
        SubjectsReducer: SubjectsReducer,

    }
})