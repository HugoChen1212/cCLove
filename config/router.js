import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from '../screens/homeScreen';
import List from '../screens/listScreen';
import Favor from '../screens/favorScreen';


  export const SimpleApp = TabNavigator({
  Home: {
    screen: Home,
    navigtionOptions: {
      tabBarLabel: 'Home',

    },
  },
   List: {
      screen: List,
      navigtionOptions: {
        tabBarLabel: 'List'
      },
    },
    Favor: {
      screen: Favor,
      navigtionOptions: {
        tabBarLabel: 'Favor'
      },
    },

});