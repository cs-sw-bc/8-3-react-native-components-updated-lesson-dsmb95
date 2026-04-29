// screens/05-TextInputMultiple.jsx
// Topic: Multiple TextInputs
// Store all field values in a single state object.

import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// TODO 1: Import TextInput from 'react-native'

export default function TextInputMultiple() {

  // TODO 2: Create a state object called 'form' with three fields:
  //         firstName: '', lastName: '', email: ''
  const [form, setForm] = useState({
    firstName: '', 
    lastName: '', 
    email: ''
  })

  // TODO 3: Write a handleChange(field, value) function that updates
  //         only the changed field using spread: { ...form, [field]: value }

  function handleChange(field, value) {
    setForm({...form, [field]: value})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>

      {/* TODO 4: Add a TextInput for firstName */}
      <Text style={styles.label}>First Name:</Text>
      <TextInput 
      value={form.firstName} 
      placeholder="First Name" 
      onChangeText={(val) => handleChange('firstName', val)}
      style={styles.input}
      ></TextInput>
      {/* TODO 5: Add a TextInput for lastName */}
      <Text style={styles.label}>Last Name:</Text>
      <TextInput 
      value={form.lastName} 
      placeholder="Last Name" 
      onChangeText={(val) => handleChange('lastName', val)}
      style={styles.input}
      ></TextInput>
      {/* TODO 6: Add a TextInput for email
                  Use keyboardType="email-address" and autoCapitalize="none" */}
      <Text style={styles.label}>Email:</Text>
      <TextInput 
      value={form.email} 
      placeholder="Email" 
      onChangeText={(val) => handleChange('email', val)}
      keyboardType="email-address"
      autoCapitalize="none"
      style={styles.input}
      ></TextInput>

      {/* TODO 7: Show a preview box below with the full name and email */}
      <View style={styles.preview}>
        <Text style={styles.previewText}>Name: {form.firstName + ' ' + form.lastName}</Text>
        <Text style={styles.previewText}>Email: {form.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
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
    marginBottom: 16,
  },
  preview: {
    marginTop: 8,
    padding: 16,
    backgroundColor: '#f0f4ff',
    borderRadius: 8,
  },
  previewText: {
    fontSize: 15,
    color: '#333',
    marginBottom: 4,
  },
});
