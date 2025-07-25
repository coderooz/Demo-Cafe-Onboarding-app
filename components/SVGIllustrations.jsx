// components/SVGIllustrations.js
import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export const CoffeeSVG = () => (
  <Svg width="120" height="120" viewBox="0 0 64 64">
    <Path
      d="M12 24h40v20a10 10 0 01-10 10H22a10 10 0 01-10-10V24z"
      fill="#8B4513"
    />
    <Path
      d="M24 12c0-3 6-6 6-6s6 3 6 6"
      stroke="#8B4513"
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export const FoodSVG = () => (
  <Svg width="120" height="120" viewBox="0 0 64 64">
    <Circle cx="32" cy="32" r="28" fill="#D2691E" />
    <Path
      d="M20 32h24v8H20z"
      fill="#FFF8DC"
    />
  </Svg>
);

export const DeliverySVG = () => (
  <Svg width="120" height="120" viewBox="0 0 64 64">
    <Path d="M10 40h40v10H10z" fill="#F4A460" />
    <Circle cx="16" cy="54" r="4" fill="#000" />
    <Circle cx="48" cy="54" r="4" fill="#000" />
  </Svg>
);
