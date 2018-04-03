import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from '../screens/homeScreen';
import List from '../screens/listScreen';
import Favor from '../screens/favorScreen';
import Welcome from '../screens/welcomeScreen';
import Setting from '../screens/settingScreen';



  export const MainNavigator = TabNavigator({
    Welcome: { screen: Welcome},
    main: {
      screen: TabNavigator({
        Home: { screen: Home },
        List: { screen: List },
        Favor: { screen: StackNavigator({
          Favor: { screen: Favor },
          settings: { screen: Setting }
        })
      }
      })
  }
});