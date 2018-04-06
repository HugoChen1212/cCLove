import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import Home from '../screens/homeScreen';
import List from '../screens/listScreen';
import Favor from '../screens/favorScreen';
import Welcome from '../screens/welcomeScreen';
import Setting from '../screens/settingScreen';
import Auth from '../screens/auth';






  export const FavorStack = StackNavigator ({
      Favor: { screen: Favor,
         // navigationOptions:{
         //  title: 'Favor'}
      },

      Setting: {screen: Setting }
  });

  export const HomeStack = StackNavigator ({
    Home: {screen: Home,
      navigationOptions:{
        title: 'Home'}
    }
  });

  export const MainNavigator = TabNavigator({
    Welcome: { screen: Welcome},
    Auth: { screen: Auth },
    main: {
      screen: TabNavigator({
        Home: { screen: HomeStack },
        List: { screen: List },
        Favor: { screen: FavorStack }
      })
  }
});
