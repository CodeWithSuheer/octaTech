import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import queriesSlice from "../features/queriesSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        queries: queriesSlice,
    },
});