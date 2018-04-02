import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from '../screens/homeScreen';
import List from '../screens/listScreen';

export default class cClove extends Component {
  render() {
      return (
        <Home />
        );
    }
  }


   const SimpleApp = TabNavigator({
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

})