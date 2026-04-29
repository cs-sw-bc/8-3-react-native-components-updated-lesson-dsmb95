// screens/10-KeyboardDismiss.jsx
// Topic: Dismissing the keyboard
// The keyboard stays open when you tap outside a TextInput.
// Fix: wrap the screen in TouchableWithoutFeedback and call Keyboard.dismiss().

import { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

// TODO 1: Import TouchableWithoutFeedback and Keyboard from 'react-native'

export default function KeyboardDismiss() {
  const [text, setText] = useState('');

  // TODO 2: Wrap the entire View below in TouchableWithoutFeedback
  //         Set onPress={Keyboard.dismiss} so tapping outside dismisses the keyboard

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.heading}>Keyboard Dismiss</Text>
        <Text style={styles.body}>
          Tap inside the field to open the keyboard, then tap anywhere
          outside it to dismiss.
        </Text>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Tap to open keyboard..."
        />
        <Text style={styles.hint}>👆 Tap anywhere outside the input</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  body: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  hint: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});
