import { configureStore } from '@reduxjs/toolkit';
import authReducer from "@/redux/reducers/authReducer";
import itemSearchReducer from "@/redux/reducers/itemSearchReducer";
import workoutSessionReducer from "@/redux/reducers/workoutSessionReducer";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        itemSearch: itemSearchReducer,
        workoutSession: workoutSessionReducer,
    },
});