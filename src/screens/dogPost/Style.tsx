import styled from "styled-components/native"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../config/consts"

export const PageView = styled.View`
    height: ${SCREEN_HEIGHT};
    justify-content: center;
    align-items: center;
`

export const DogPostCard = styled.View`
margin-top: ${0.02 * SCREEN_HEIGHT};
width: ${0.8 * SCREEN_WIDTH};
height: ${0.6 * SCREEN_HEIGHT};
border-width: 0.5px;
border-radius: 18px;
justify-content: space-around;
align-items: center;
`

export const DogName = styled.Text`
    font-size: 30px;
    font-family: 'Roboto'
`

export const PostImage = styled.Image`
height: ${0.3 * SCREEN_HEIGHT};
width: ${0.3 * SCREEN_HEIGHT};
`