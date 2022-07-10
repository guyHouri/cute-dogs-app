import { ScrollView, Text } from 'react-native';
import { dogPostsSelector, useAppSelector } from "../../store/store";
import { DogPostImages } from "./assets/DogPostImages";
import { DogPostCard, Header, HeaderImage, HeaderItemView, HeaderText, PostImage, PostsView } from "./style";

import React from "react";
import { MainRoutes, PostsScreenProps } from "../../navigation/Config";

const COOL_DOG_IMAGE = require("./assets/coolDog.png")

export const Posts: React.FC<PostsScreenProps> = ({navigation}) => {

    const dogPosts = useAppSelector(dogPostsSelector);

    return (
        <ScrollView>
            <Header>
                <HeaderItemView>
                    <HeaderText>our cute dogs</HeaderText>
                    <HeaderImage source={COOL_DOG_IMAGE}></HeaderImage>
                </HeaderItemView>
            </Header>

            <PostsView>
                {dogPosts.map(dogPost => {
                    return (
                        <DogPostCard onPress={() => navigation.navigate(MainRoutes.DogPost, {dogPostId: dogPost.id})} key={dogPost.id}>
                            <Text>{dogPost.name}</Text>
                            <PostImage source={{ uri: DogPostImages[dogPost.id] }}></PostImage>
                            <Text>likes = {dogPost.likes}</Text>
                        </DogPostCard>
                    )
                })}
            </PostsView>

        </ScrollView>
    )
}