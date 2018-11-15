import React from 'react';
import { Button, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default ({ text, action }) => {
  return (
    <TouchableOpacity onPress={action} style={styles.button}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#CCC',
    color: 'blue',
    padding: 10,
    borderRadius: 5
  }
});
