import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
const TouchableOpacity = styled.TouchableOpacity`
  background-color: ${props => props.theme.button.bg};
  padding: 10px;
  border-radius: 5px;
  margin: 0px 5px;
`;

const Text = styled.Text`
  color: ${props => props.theme.button.fg};
`;

const CompteurButton = ({ text, action }) => {
  return (
    <TouchableOpacity onPress={action}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
CompteurButton.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};
export default CompteurButton;
