// screens/02-SafeAreaDemo.jsx
// Topic: SafeAreaView
// On iOS, content can overlap the notch if you use a plain View as your root.

import { View, Text, StyleSheet } from 'react-native';

export default function SafeAreaDemo() {

  // TODO 1: Import SafeAreaView from 'react-native'

  // TODO 2: Replace the outer View with SafeAreaView so content
  //         doesn't overlap the notch or home indicator

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.heading}>SafeAreaView Demo</Text>
        <Text style={styles.body}>
          This content should be wrapped in SafeAreaView. On iOS it won't
          overlap the notch or the home indicator at the bottom of the screen.
        </Text>
        <Text style={styles.body}>
          Try replacing SafeAreaView with a plain View and test on an iPhone
          with a notch — notice the content shifts up behind the status bar.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#4a90d9',
  },
  container: {
    flex: 1,
    padding: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
    marginBottom: 12,
  },
});
