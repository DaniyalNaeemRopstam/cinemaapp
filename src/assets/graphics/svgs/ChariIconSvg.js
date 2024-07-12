import React from 'react';
import { Svg, Rect, G } from 'react-native-svg';

const ChairIconSVG = ({ color = '#A6A6A6', size = 18, opacity = 0.5 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G opacity={opacity}>
        <Rect width="17.012" height="12.759" rx="2" fill={color} />
        <Rect x="2.55176" y="13.6094" width="11.9084" height="2.5518" rx="1.2759" fill={color} />
      </G>
    </Svg>
  );
};

export default ChairIconSVG;
