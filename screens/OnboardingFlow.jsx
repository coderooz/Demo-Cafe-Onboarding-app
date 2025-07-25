// screens/OnboardingFlow.js
import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import OnboardingScreen from '../components/OnboardingScreen';
import { CoffeeSVG, FoodSVG, DeliverySVG } from '../components/SVGIllustrations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const slides = [
  {
    key: 'welcome',
    title: 'Welcome to Our Demo App',
    description: 'Test onboarding flows with clean UI and animations.',
    Illustration: CoffeeSVG,
  },
  {
    key: 'drinks',
    title: 'Delicious Coffee',
    description: 'Experience smooth transitions between screens.',
    Illustration: CoffeeSVG,
  },
  {
    key: 'food',
    title: 'Tasty Snacks',
    description: 'Add SVG illustrations with ease.',
    Illustration: FoodSVG,
  },
  {
    key: 'delivery',
    title: 'Fast Delivery',
    description: 'Use AsyncStorage to track onboarding completion.',
    Illustration: DeliverySVG,
  },
];

export default function OnboardingFlow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();
  const navigation = useNavigation();

  const handleNext = async () => {
    if (currentIndex < slides.length - 1) {
      ref.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      await AsyncStorage.setItem('hasLaunched', 'true');
      navigation.replace('Home');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={e => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        data={slides}
        renderItem={({ item }) => {
          const { key, ...rest } = item;
          return <OnboardingScreen key={key} {...rest} />;
        }}
        keyExtractor={item => item.key}
      />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {currentIndex === slides.length - 1 ? 'Done' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
  },
  button: {
    backgroundColor: '#8B4513',
    padding: 14,
    borderRadius: 8,
    margin: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
