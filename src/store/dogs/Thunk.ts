import { AppDispatch } from "../store";
import { likeDogPost, unlikeDogPost } from "./DogsSlice";

// we dispatch it
export const likeDogThunk = (dogId: number) => (appDispatch: AppDispatch) => {
    // middleware action
    appDispatch(likeDogPost({dogId}));
}