// screens/04-TextInputBasic.jsx
// Topic: TextInput (basic)
// TextInput is controlled by state — same pattern as React on the web.

import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// TODO 1: Import TextInput from 'react-native'

export default function TextInputBasic() {

  // TODO 2: Create a state variable called 'name', initial value ''

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your name:</Text>

      {/* TODO 3: Add a TextInput here
          - value should come from your state variable
          - onChangeText should update the state
          - add a placeholder
          - add autoCapitalize="words"
      */}

      {/* TODO 4: Display "Hello, {name}!" below the input
          Show "Hello, stranger!" if name is empty
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 24,
  },
  output: {
    fontSize: 22,
    color: '#4a90d9',
    fontWeight: 'bold',
  },
});
