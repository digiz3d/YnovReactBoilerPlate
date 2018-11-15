import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

import { getRandomSentence, getRandomHouse } from '../utils/RandomStuff';

const Text = styled.Text`
  color: ${props => props.theme.panel.fg};
  text-align: center;
`;
const LargeText = styled.Text`
  color: ${props => props.theme.panel.fg};
  font-size: 20px;
  text-align: center;
`;

const nbSentences = 5;

class Choixpeau extends React.Component {
  constructor(props) {
    super(props);

    this.state = { house: '', sentence: '' };
    this.interval = null;
    this.timeout = null;
    this.sentenceCount = 0;

    this.displaySentence = this.displaySentence.bind(this);
    this.displayHouse = this.displayHouse.bind(this);
    this.startThinking = this.startThinking.bind(this);
  }

  componentDidMount() {
    this.displaySentence();
    this.startThinking();
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  startThinking() {
    this.interval = setInterval(() => {
      if (++this.sentenceCount >= nbSentences - 1) {
        clearInterval(this.interval);
        this.timeout = setTimeout(this.displayHouse, 2000);
      }
      this.displaySentence();
    }, 2000);
  }

  displaySentence() {
    this.setState({ sentence: getRandomSentence() });
  }

  displayHouse() {
    this.setState({ house: getRandomHouse(), sentence: '' });
  }

  render() {
    return (
      <View>
        {this.state.sentence !== '' && <Text>{this.state.sentence}</Text>}

        {this.state.house !== '' && (
          <View>
            <Text>Tu appartiens à ...</Text>
            <LargeText>{this.state.house}</LargeText>
          </View>
        )}
      </View>
    );
  }
}

export default Choixpeau;
