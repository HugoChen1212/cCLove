import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';



class FavorScreen extends Component {
  static navigationOptions = {
    title: 'Favor',
    headerRight: <Button title="Setting"/>
  }

  render() {
    return (
      <View>
        <Text>FavorScreen</Text>
        <Text>FavorScreen</Text>
        <Text>FavorScreen</Text>
      </View>
      )
  }
}

export default FavorScreen;