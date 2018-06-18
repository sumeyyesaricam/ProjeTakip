
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
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