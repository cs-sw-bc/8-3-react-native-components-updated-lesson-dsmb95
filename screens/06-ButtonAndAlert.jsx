// screens/06-ButtonAndAlert.jsx
// Topic: Button and Alert
// Button is the simplest pressable component.
// Alert opens a native OS dialog.

import { View, Text, StyleSheet } from 'react-native';

// TODO 1: Import Button and Alert from 'react-native'

export default function ButtonAndAlert() {

  // TODO 2: Write a handlePress function that calls Alert.alert()
  //         with a title, a message, and an OK button

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Button & Alert</Text>
      <Text style={styles.body}>
        Tap the button below to trigger a native Alert dialog.
      </Text>

      {/* TODO 3: Add a Button with title="Show Alert" that calls handlePress */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 32,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  body: {
    fontSize: 16,
    color: '#555',
    marginBottom: 32,
    lineHeight: 24,
  },
});
