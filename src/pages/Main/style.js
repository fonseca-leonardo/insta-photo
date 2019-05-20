
import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

export const Container = styled.View`
  flex: 1;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  justify-content: flex-end;

`;

export const Rodape = styled.View`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 10%;
  left: 0;
  top: 85%;
  justify-content: center;
  padding: 0px 50px;
`;

export const UltimaFoto = styled.Image`
  width: 40px;
  height: 40px; 
  border-color: white;
  border-width: 2px;
  border-radius: 4px
`;

export const BotaoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BotaoRaioExterno = styled.TouchableOpacity`
  background-color: gray;
  opacity: 0.7;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  height: 70px;
  width: 70px;
  align-self: center;
`;

export const BotaoRaioInterno = styled.View`
  background-color: white;
  opacity: 1.3;
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

