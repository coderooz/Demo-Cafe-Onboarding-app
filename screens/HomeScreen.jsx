// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>🏠 Home Screen</Text>
      <Text style={styles.description}>
        You’ve completed the onboarding. Welcome!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8DC',
    padding: 20,
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8B4513',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
});
