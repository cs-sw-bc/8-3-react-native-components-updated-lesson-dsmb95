import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const screens = [
  '01 – ScrollView',
  '02 – SafeAreaView',
  '03 – FlatList',
  '04 – TextInput Basic',
  '05 – TextInput Multiple',
  '06 – Button & Alert',
  '07 – Alert Buttons',
  '08 – TouchableOpacity',
  '09 – Pressable',
  '10 – Keyboard Dismiss',
  '11 – Combined Example',
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Lesson 3 – Examples</Text>
      {screens.map((name) => (
        <TouchableOpacity
          key={name}
          style={styles.button}
          onPress={() => navigation.navigate(name)}
        >
          <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    marginTop: 16,
    color: '#222',
  },
  button: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#4a90d9',
  },
  buttonText: {
    fontSize: 15,
    color: '#333',
  },
});