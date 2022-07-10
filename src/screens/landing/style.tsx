import styled from "styled-components/native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../config/consts";

export const Container = styled.View`
  flex: 1;
  background-color: white;
  height: ${SCREEN_HEIGHT};
  width: ${SCREEN_WIDTH};
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
width: ${SCREEN_HEIGHT * 0.3};
height:  ${SCREEN_HEIGHT * 0.3};
`;

export const HeaderText = styled.Text`
  font-size: 20;
  font-family: 'serif'
`;

export const ContinueBtn = styled.TouchableOpacity`
  border-radius: 40px;
  background-color: #ff5c4d;
  align-items: center;
  justify-content: center;
  height: ${0.05 * SCREEN_HEIGHT};
  width: ${0.5 * SCREEN_WIDTH};
  `

export const ContinueBtnText = styled.Text`
  color: white;
  font-size: 18px;

`