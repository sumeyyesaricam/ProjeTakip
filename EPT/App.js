/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import Header from './app/components/Header';
import UserList from './app/components/UserList';

export default class App extends Component {
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Görevlerim'} />
        <UserList />
      </View>
    );
  }
}

