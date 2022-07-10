import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { DogPost } from "../types/types"

export enum MainRoutes {
    Landing = "landing",
    Posts = "posts",
    DogPost = "dogPost",
};

export type MainStackParamList = {
    [MainRoutes.DogPost]: {dogPostId: number};
    [MainRoutes.Posts]: undefined;
    [MainRoutes.Landing]: undefined;
};

export type DogPostScreenProps = NativeStackScreenProps<MainStackParamList, MainRoutes.DogPost>;
export type LandingScreenProps = NativeStackScreenProps<MainStackParamList, MainRoutes.Landing>;
export type PostsScreenProps = NativeStackScreenProps<MainStackParamList, MainRoutes.Posts>;
