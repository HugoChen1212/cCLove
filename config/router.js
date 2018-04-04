import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import Home from '../screens/homeScreen';
import List from '../screens/listScreen';
import Favor from '../screens/favorScreen';
import Welcome from '../screens/welcomeScreen';
import Setting from '../screens/settingScreen';






  export const FavorStack = StackNavigator ({
      Favor: { screen: Favor,
         // navigationOptions:{
         //  title: 'Favor'}
      },

      Setting: {screen: Setting }
  });

  export const MainNavigator = TabNavigator({
    Welcome: { screen: Welcome},
    main: {
      screen: TabNavigator({
        Home: { screen: Home },
        List: { screen: List },
        Favor: { screen: FavorStack }
      })
  }
});
