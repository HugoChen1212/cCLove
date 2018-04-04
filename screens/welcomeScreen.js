import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATE = [
  {text: 'Welcome to cCLove App', color: '#03A9F4'},
  {text: 'Set your location, then find your pet', color: '#009688'}
];

class WelcomeScreen extends Component {

  onSlidesComplete = () => {
    this.props.navigation.navigate('Home');
  }



  render() {
    return (
      <Slides data={SLIDE_DATE} onComplete={this.onSlidesComplete} />
      )
  }
}

export default WelcomeScreen;