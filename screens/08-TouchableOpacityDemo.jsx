// screens/08-TouchableOpacityDemo.jsx
// Topic: TouchableOpacity
// Use when you need a fully custom-styled button.
// activeOpacity controls how faded the button gets on press (0–1).

import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// TODO 1: Import TouchableOpacity from 'react-native'

export default function TouchableOpacityDemo() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TouchableOpacity</Text>

      <Text style={styles.count}>{count}</Text>

      {/* TODO 2: Add a TouchableOpacity that increments count on press
                  Style it using styles.button, add activeOpacity={0.7}
                  Put a Text label inside it */}

      {/* TODO 3: Add a second TouchableOpacity that resets count to 0
                  Use styles.resetButton for a different colour */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#222',
  },
  count: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#4a90d9',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4a90d9',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 30,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#e53935',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
