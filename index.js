import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import App from './App';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from './screens/homeScreen';
import List from './screens/listScreen';



   const SimpleApp = TabNavigator({
  Home: {
    screen: Home,
    navigtionOptions: {
      tabBarLabel: 'Home',

    },
  },
   List: {
      screen: App,
      navigtionOptions: {
        tabBarLabel: 'List'
      },
    },

})




AppRegistry.registerComponent('cCLove', () => SimpleApp);
