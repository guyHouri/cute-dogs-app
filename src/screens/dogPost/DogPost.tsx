import React, { useEffect, useState } from "react"
import { DogPost as DogPostType } from "../../types/types"
import { DogPostImages } from "../posts/assets/DogPostImages"
import { LikeButton } from "./LikeBtn/LikeBtn"
import { DogPostCard, PostImage, PageView, DogName } from "./Style"
import { Text } from "react-native"
import { MainRoutes, MainStackParamList } from "../../navigation/Config"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { dogPostsSelector, useAppDispatch, useAppSelector } from "../../store/store"
import { likeDogThunk } from "../../store/dogs/Thunk"
import { unlikeDogPost } from "../../store/dogs/DogsSlice"

type Props = NativeStackScreenProps<MainStackParamList, MainRoutes.DogPost>;

export const DogPost: React.FC<Props> = ({ route }) => {

    const dispatch = useAppDispatch();
    const dogPosts = useAppSelector(dogPostsSelector);
    
    const post = dogPosts[route.params.dogPostId]
    const [liked, setLiked] = useState(false);
    
    const onLike = () => {
        if (!liked) {                        
            dispatch(likeDogThunk(post.id));
            setLiked(true);
          } else {
            dispatch(unlikeDogPost({ dogId: post.id }));
            setLiked(false);
          }
    }

    return (
        <PageView>
            <DogPostCard key={post.id}>
                <DogName>{post.name}</DogName>
                <PostImage source={{ uri: DogPostImages[post.id] }}></PostImage>
                <LikeButton liked={liked} handleLike={onLike} likes={post.likes}></LikeButton>
            </DogPostCard>
        </PageView>
    )
}