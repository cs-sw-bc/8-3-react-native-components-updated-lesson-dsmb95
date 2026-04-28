// screens/01-ScrollViewDemo.jsx
// Topic: ScrollView
// Without ScrollView, content that goes off-screen is clipped.

import { View, Text, StyleSheet } from 'react-native';

export default function ScrollViewDemo() {

  // TODO 1: Import ScrollView from 'react-native'

  // TODO 2: Wrap the content below in a ScrollView instead of a View

  return (
    <View style={styles.container}>
      {Array.from({ length: 30 }, (_, i) => (
        <View key={i} style={styles.row}>
          <Text style={styles.text}>Line {i + 1}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  row: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
  },
});
