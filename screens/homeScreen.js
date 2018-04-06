import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HomeImgs from '../components/home-page/home-img';


class HomeScreen extends Component {

  render() {
    return (
      <View>
        <HomeImgs />
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
      </View>
      )
  }
}

export default HomeScreen;