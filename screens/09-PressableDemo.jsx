// screens/09-PressableDemo.jsx
// Topic: Pressable
// The style prop receives { pressed } so you can change appearance while held down.
// Also exposes onPressIn and onPressOut for fine-grained control.

import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// TODO 1: Import Pressable from 'react-native'

export default function PressableDemo() {
  const [message, setMessage] = useState('Press and hold the button');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pressable</Text>

      {/* TODO 2: Add a Pressable component with:
          - style prop as a function: ({ pressed }) => [styles.button, pressed && styles.buttonPressed]
          - onPress sets message to 'Tapped!'
          - onPressIn sets message to 'Holding...'
          - onPressOut sets message to 'Released!'
          - children as a function: ({ pressed }) => <Text>...</Text>
            Show different label text depending on pressed state
      */}

      <Text style={styles.feedback}>{message}</Text>
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
    marginBottom: 48,
    color: '#222',
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginBottom: 32,
  },
  buttonPressed: {
    backgroundColor: '#3700b3',
    transform: [{ scale: 0.96 }],
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  feedback: {
    fontSize: 18,
    color: '#555',
  },
});
