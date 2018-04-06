import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeImgs from '../components/home-page/home-img';


const styles = StyleSheet.create({
    homeContainer: {
    flex: 1
  }
});


class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.homeContainer}>
        <HomeImgs />
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
      </View>
      )
  }
}

export default HomeScreen;


