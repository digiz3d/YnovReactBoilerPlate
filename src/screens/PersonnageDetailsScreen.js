import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

import StyledScreen from '../components/StyledScreen';

const CharacterImage = styled.Image`
  height: 200px;
  width: 150px;
  margin: 5px;
  border-radius: 100px;
`;

const Panel = styled.View`
  background-color: ${props => props.theme.panel.bg};
  border-width: 1px;
  border-color: #000;
  border-radius: 10px;
  align-items: center;
  flex: 1;
  align-self: stretch;
  margin: 50px;
  justify-content: flex-start;
  padding: 5px;
`;

const PanelTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: ${props => props.theme.panel.fg};
`;

const PanelText = styled.Text`
  font-size: 12px;
  text-align: center;
  margin: 10px;
  color: ${props => props.theme.panel.fg};
  align-self: flex-start;
`;

class PersonnageDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      character: null
    };
  }

  componentDidMount() {
    const character = this.props.navigation.getParam('character');
    this.setState({ ready: true, character });
  }

  render() {
    if (!this.state.ready) {
      return <ActivityIndicator />;
    }
    return (
      <StyledScreen>
        <Panel>
          <CharacterImage source={{ uri: this.state.character.image }} />
          <PanelTitle>{this.state.character.name}</PanelTitle>
          <PanelText>{this.state.character.species}</PanelText>
          <PanelText>{this.state.character.gender}</PanelText>
          <PanelText>{this.state.character.house}</PanelText>
          <PanelText>{this.state.character.dateOfBirth}</PanelText>
        </Panel>
      </StyledScreen>
    );
  }
}

export default PersonnageDetailsScreen;
