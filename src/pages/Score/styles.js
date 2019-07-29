import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  align-content: flex-start;
`;

export const Header = styled.View`
  padding: 15px;
  background-color: #fff;
  border-radius: 15px;
  margin: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ScoreItem = styled.View`
  padding: 15px;
  background-color: #fff;
  border-radius: 15px;
  margin: 5px;
`;

export const ScoreText = styled.Text`
  color: #191970;
  font-size: 18px;
  font-weight: bold;
`;
