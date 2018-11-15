import styled from 'styled-components/native';

const Screen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  background-color: ${props => props.theme.bg};
`;

export default Screen;
