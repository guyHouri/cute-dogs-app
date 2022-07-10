import { DogPost } from "../../types/types";

export type DogSliceState = {
    dogPosts: DogPost[],
}

export const createInitailDogState = (): DogSliceState => {
    let dogPosts = new Array(10);
    for (const dogId of Array(10).keys()) {
        dogPosts[dogId] = {id: dogId, name: "dog" + dogId, likes: 0}
    }
    return {dogPosts}
}