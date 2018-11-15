import React, { Component } from 'react';
import styled from 'styled-components/native';

import CompteurButton from '../components/CompteurButton';
import Compteur from '../components/Compteur';
import StyledScreen from '../components/StyledScreen';

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

const Controls = styled.View`
  flex-direction: row;
`;

type Props = {};
export default class CompteurScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <StyledScreen>
        <Panel>
          <PanelText>Compteur</PanelText>
          <Compteur nb={this.state.count} />
          <Controls>
            <CompteurButton action={this.decrement} text="-" />
            <CompteurButton action={this.increment} text="+" />
          </Controls>
        </Panel>
      </StyledScreen>
    );
  }
}
