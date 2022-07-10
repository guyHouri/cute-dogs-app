import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAppDispatch } from "../../../store/store";
import { likeDogThunk } from "../../../store/dogs/Thunk";
import { likeDogPost, unlikeDogPost } from "../../../store/dogs/DogsSlice";

type Props = {
  handleLike: () => void;
  liked: boolean;
  likes: number
};

export const LikeButton: React.FC<Props> = ({ handleLike, liked, likes }) => {

  return (
    <>
      <Pressable onPress={handleLike}>
        <MaterialCommunityIcons
          name={liked ? "heart" : "heart-outline"}
          size={32}
          color={liked ? "red" : "black"}
        />
      </Pressable>
      <Text>likes = {likes}</Text>
    </>
  );
};