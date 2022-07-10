import { LandingScreenProps, MainRoutes } from '../../navigation/Config';
import { Container, ContinueBtn, ContinueBtnText, HeaderText, Logo } from "./style";

const logo = require("../../../assets/logo.png");

export const Landing: React.FC<LandingScreenProps> = ({navigation}) => {
  const onContinue = () => {
    navigation.navigate(MainRoutes.Posts)
  };

  return (
    <Container>
      <HeaderText>dogs app</HeaderText>
      <Logo source={logo}></Logo>
      <ContinueBtn onPress={onContinue}>
        <ContinueBtnText>continue</ContinueBtnText>
      </ContinueBtn>
    </Container>
  );
}