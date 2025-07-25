# Demo Cafe Onboarding App

This is a simple React Native demo app showcasing a basic onboarding flow using `react-navigation`, `AsyncStorage`, and custom SVG illustrations. The app conditionally renders an onboarding experience for first-time users and navigates to the home screen once completed.

## ✨ Features

- Multi-step onboarding screens with horizontal scroll
- Persistent onboarding status using AsyncStorage
- Smooth navigation using React Navigation
- Custom SVG illustrations for visual enhancement
- Clean, minimalist UI using React Native components

## 📁 Project Structure

```markdown

.
├── App.js
├── components
│   ├── OnboardingScreen.jsx
│   └── SVGIllustrations.jsx
├── screens
│   ├── HomeScreen.jsx
│   └── OnboardingFlow.jsx
└── ...

````

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Expo CLI (if using Expo) or a React Native environment set up via CLI

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-native-onboarding-demo.git
cd react-native-onboarding-demo
````

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

## 📱 How It Works

* On first launch, the app checks AsyncStorage for a flag `hasLaunched`.
* If not found, it shows the onboarding flow (`OnboardingFlow.jsx`).
* Once completed, it sets `hasLaunched` to `true` and redirects to `HomeScreen`.
* On subsequent launches, the user is taken directly to the home screen.

## 🛠️ Technologies Used

* React Native
* React Navigation
* AsyncStorage
* Custom SVG using `react-native-svg`

## 🖼️ Onboarding Screens

1. **Welcome to Our Demo App**
2. **Delicious Coffee**
3. **Tasty Snacks**
4. **Fast Delivery**

Each screen includes custom illustrations and transition animations.

## 📦 Dependencies

* `@react-navigation/native`
* `@react-navigation/native-stack`
* `@react-native-async-storage/async-storage`
* `react-native-svg`

## 📌 Notes

* Make sure to link native dependencies if not using Expo.
* Test the onboarding reset by clearing AsyncStorage (`AsyncStorage.clear()` in development).

## 📄 License

This project is licensed under the MIT License.
