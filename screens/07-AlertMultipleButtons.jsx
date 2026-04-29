// screens/07-AlertMultipleButtons.jsx
// Topic: Alert with multiple buttons
// Each button can have its own label, style, and onPress handler.

import { View, Button, Text, StyleSheet, Alert } from 'react-native';

// TODO 1: Import Alert from 'react-native'

export default function AlertMultipleButtons() {

  const handleDelete = () => {
    Alert.alert(
      'Delete item?',
      undefined,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => Alert.alert('Item successfully deleted'),
        },
      ]
    );
  };

  const handleChoice = () => {
    // TODO 3: Show an Alert with title "Where to next?"
    //         Add three buttons: "Home", "Profile", and "Cancel"
    //         Each of Home and Profile should show an Alert on press
    Alert.alert(
      "Where to next?",
      undefined,
      [
        {text: "Home", onPress:() => Alert.alert('Welcome home!')},
        {text: "Profile", onPress:() => Alert.alert('Welcome to your profile!')},
        {text: "Cancel", style: "cancel"}
      ]
    )
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Alert with Multiple Buttons</Text>

      <Text style={styles.subheading}>Destructive confirmation</Text>
      <Text style={styles.body}>
        Cancel and Delete buttons. Delete uses the destructive style (red on iOS).
      </Text>
      <Button title="Delete Item" onPress={handleDelete} color="#e53935" />

      <View style={styles.spacer} />

      <Text style={styles.subheading}>Navigation from Alert</Text>
      <Text style={styles.body}>
        Each button's onPress can run any logic — including navigating to a screen.
      </Text>
      <Button title="Choose Screen" onPress={handleChoice} color="#4a90d9" />
    </View>
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
    marginBottom: 32,
    color: '#222',
  },
  subheading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  body: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 22,
  },
  spacer: {
    height: 32,
  },
});
