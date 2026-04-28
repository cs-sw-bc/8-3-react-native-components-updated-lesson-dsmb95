// screens/11-CombinedExample.jsx
// Topic: Putting it all together
// TextInput + Button + Alert validation + keyboard dismiss + conditional rendering

import { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

// TODO 1: Import Alert, TouchableWithoutFeedback, and Keyboard from 'react-native'

export default function CombinedExample() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    // TODO 2: Validate that name is not empty — show an Alert if it is
    // TODO 3: Validate that email is not empty — show an Alert if it is
    // TODO 4: If both are filled, dismiss the keyboard and set submitted to true
  };

  const handleReset = () => {
    // TODO 5: Reset form to empty strings and set submitted back to false
  };

  return (
    // TODO 6: Wrap the outer View in TouchableWithoutFeedback to dismiss keyboard on tap outside
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>

      {submitted ? (
        // TODO 7: Show a success message using form.name and form.email
        //         Add a "Start Over" Button that calls handleReset
        <View style={styles.success}>
          <Text style={styles.successText}>✅ Submitted!</Text>
        </View>
      ) : (
        <>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={form.name}
            onChangeText={(val) => handleChange('name', val)}
            placeholder="Your name"
            autoCapitalize="words"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={form.email}
            onChangeText={(val) => handleChange('email', val)}
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Button title="Submit" onPress={handleSubmit} color="#4a90d9" />
        </>
      )}
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#222',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  success: {
    alignItems: 'center',
    gap: 12,
  },
  successText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  successSub: {
    fontSize: 15,
    color: '#555',
    marginBottom: 16,
    textAlign: 'center',
  },
});
