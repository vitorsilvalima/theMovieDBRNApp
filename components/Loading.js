import React, { Component } from 'react';
import { Animated, View } from 'react-native'

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: new Animated.Value(0),
      value: 1,
    }
  }
  loading(){
    Animated.timing(                
      this.state.zoom,           
      {
        toValue: this.state.value,
        duration: 1000, 
      }
    ).start(() => {
      this.setState({
        value: this.state.value === 0 ? 1 : 0,
      }, () => this.loading())
    });
  }
  componentDidMount(){
    this.loading()
  }
  render(){
    const { zoom } = this.state;
    return (<Animated.View                 // Special animatable View
        style={{
          borderRadius: 50,
          width: zoom.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 100],
          }),
          height: zoom.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 100],
          }),
          backgroundColor: 'white',
          opacity: zoom,         // Bind opacity to animated value
        }}
      >
      </Animated.View>)
  }
}