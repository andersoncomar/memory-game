import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Background = styled(LinearGradient).attrs({
  colors: ['#00008B', '#8A2BE2'],
})`
  flex: 1;
  display: flex;
`;
