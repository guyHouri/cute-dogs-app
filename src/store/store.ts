import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { DogSlice } from "./dogs/DogsSlice";

export const store = configureStore({
    reducer: {
        dogs: DogSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const dogPostsSelector = (state: RootState) => state.dogs.dogPosts;



