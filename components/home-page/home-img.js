import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    stretch: {
    width: 350,
    height: 250
  }
});

class HomeImgs extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.stretch}
          source={require('../../imgs/Hera.jpeg')}
        />
      </View>
      )
  }
}

export default HomeImgs;