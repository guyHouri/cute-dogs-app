import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DogSliceState, createInitailDogState } from "./InitialState";

export const DogSlice = createSlice({
    name: 'dogs',
    initialState: createInitailDogState(),
    reducers: {
        likeDogPost: (state: DogSliceState, action: PayloadAction<{dogId: number}>) => {
            state.dogPosts[action.payload.dogId].likes ++;
        },
        unlikeDogPost: (state: DogSliceState, action: PayloadAction<{dogId: number}>) => {
            state.dogPosts[action.payload.dogId].likes --;
        },
    }
})

export const {likeDogPost, unlikeDogPost} = DogSlice.actions;