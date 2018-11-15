import React, { Component } from 'react';
import styled from 'styled-components/native';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';

import StyledScreen from '../components/StyledScreen';

const api = axios.create();

const ListItem = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
`;

const ListItemText = styled.Text`
  line-height: 20px;
  padding: 5px;
`;

const ErrorText = styled.Text`
  color: ${props => props.theme.error.fg};
  background-color: ${props => props.theme.error.bg};
  padding: 10px;
  border-radius: 10px;
`;

const ListItemImage = styled.Image`
  height: 30px;
  width: 30px;
  margin: 5px;
`;

const FlatList = styled.FlatList`
  background-color: ${props => props.theme.panel.fg};
  flex: 1;
  align-self: stretch;
  margin: 5px;
  border-radius: 3px;
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
`;

const PanelText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: ${props => props.theme.panel.fg};
`;

type Props = {};
export default class ClassementScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      loading: true,
      error: false
    };
  }

  componentDidMount() {
    api
      .get('http://hp-api.herokuapp.com/api/characters')
      .then(response => {
        if (response.data) {
          let c = response.data;
          if (Array.isArray(c)) {
            c.sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              } else if (a.name > b.name) {
                return 1;
              } else {
                return 0;
              }
            });
          }
          return this.setState({ loading: false, characters: c });
        }
        this.setState({ loading: false, characters: [] });
      })
      .catch(() => {
        this.setState({ error: true, loading: false });
      });
  }

  gotoCharacter(item) {
    this.props.navigation.navigate('PersonnageDetails', { character: item });
  }

  render() {
    return (
      <StyledScreen>
        <Panel>
          <PanelText>Personnages</PanelText>
          {this.state.error && <ErrorText>Un erreur est survenue</ErrorText>}
          {this.state.loading && <ActivityIndicator />}
          {!this.state.loading && !this.state.error && this.state.characters && (
            <FlatList
              data={this.state.characters}
              renderItem={({ item }) => (
                <ListItem onPress={() => this.gotoCharacter(item)}>
                  <ListItemText>{item.name}</ListItemText>
                  <ListItemImage source={{ uri: item.image }} />
                </ListItem>
              )}
              keyExtractor={item => item.name}
            />
          )}
          {!this.state.loading &&
            !this.state.error &&
            !this.state.characters && (
              <ErrorText>Pas de personnage...</ErrorText>
            )}
        </Panel>
      </StyledScreen>
    );
  }
}
