import React, { Component } from 'react';
import styled from 'styled-components/native';

import StyledScreen from '../components/StyledScreen';
import Choixpeau from '../components/Choixpeau';

const Panel = styled.View`
  background-color: ${props => props.theme.panel.bg};
  border-width: 1px;
  border-color: #000;
  border-radius: 10px;
  align-items: center;
  flex: 1;
  margin: 50px;
  justify-content: space-around;
`;

const PanelText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: ${props => props.theme.panel.fg};
`;

export default class ChoixpeauScreen extends Component {
  render() {
    return (
      <StyledScreen>
        <Panel>
          <PanelText>Le choixpeau :</PanelText>
          <Choixpeau />
        </Panel>
      </StyledScreen>
    );
  }
}
