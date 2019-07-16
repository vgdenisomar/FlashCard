
import {
  createStackNavigator,
  createAppContainer,
  StyleSheet
} from 'react-navigation';

import { Animated, Easing, Platform } from 'react-native';

import Inicio from './src/inicio'
import flash from './src/flash'
import home from './src/home'
export function fromRight(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: ({ layout, position, scene }) => {
      const { index } = scene;
      const { initWidth } = layout;

      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [initWidth, 0, 0],
      });

      const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

      return { opacity, transform: [{ translateX }] };
    },
  };
}


const RootStack = createStackNavigator({
Inicio: {
  screen: Inicio
},
flash:{
  screen: flash
},
home:{
  screen:home
}
},
{
  transitionConfig: () => fromRight()
},

);

console.disableYellowBox = true;



const App = createAppContainer(RootStack);

export default App;