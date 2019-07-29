import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70;
`;

export const ButtonNewGame = styled.TouchableOpacity`
  align-items: center;
  margin-bottom: 25px;
`;

export const ButtonScore = styled.TouchableOpacity`
  align-items: center;
  margin-bottom: 25px;
`;

export const NewGameTitle = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
