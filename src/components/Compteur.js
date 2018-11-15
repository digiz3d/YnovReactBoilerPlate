import React from 'react';
import styled from 'styled-components/native';

const View = styled.View`
  padding: 10px;
  border-radius: 5px;
`;

const Text = styled.Text`
  color: ${props => props.theme.panel.fg};
`;

export default ({ nb }) => {
  return (
    <View>
      <Text>{nb}</Text>
    </View>
  );
};
