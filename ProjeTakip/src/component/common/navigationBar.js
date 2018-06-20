
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class NavigationBar extends React.Component{
 
  render() {
    return (
      <View style={{backgroundColor:'yellow'}}>
        <Text> {this.props.text} </Text>
      </View>
    );
  }
}