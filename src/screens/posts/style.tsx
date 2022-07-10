import styled from "styled-components/native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../config/consts";

export const Header = styled.View`
    height: ${0.23 * SCREEN_HEIGHT};
    background-color: #f4ded3;
    justify-content: center;
    align-items: center;
`

export const HeaderItemView = styled.View`
    margin-top: ${0.02 * SCREEN_HEIGHT};
    align-items: center;
    justify-content: center;
    height: ${0.1 * SCREEN_HEIGHT};
`

export const HeaderText = styled.Text`
    height: ${0.05 * SCREEN_HEIGHT};
    text-align: center;
    font-size: 20
`

export const HeaderImage = styled.Image`
    align-self: center;
    height: ${0.1 * SCREEN_HEIGHT};
    width: ${0.1 * SCREEN_HEIGHT};
`

export const PostsView = styled.View`
    justify-content: center;
    align-items: center;
`

export const DogPostCard = styled.TouchableOpacity`
    margin-top: ${0.02 * SCREEN_HEIGHT};
    width: ${0.6 * SCREEN_WIDTH};
    height: ${0.3 * SCREEN_HEIGHT};
    border-width: 0.5px;
    border-radius: 18px;
    justify-content: center;
    align-items: center;
`
export const PostImage = styled.Image`
    height: ${0.2 * SCREEN_HEIGHT};
    width: ${0.2 * SCREEN_HEIGHT};
`