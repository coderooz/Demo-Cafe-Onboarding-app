// components/OnboardingScreen.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

export default function OnboardingScreen({ title, description, Illustration }) {
  return (
    <View style={styles.container}>
      <View style={styles.illustrationContainer}>
        {Illustration && <Illustration />}
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
    padding: 30,
  },
  illustrationContainer: {
    height: 250,
    marginBottom: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B4513',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginTop: 10,
  },
});
