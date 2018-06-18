/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import { NavigationBar } from './app/components';
import Header from './app/components/header';
import UserList from './app/components/UserList';
export default class App extends Component {
  goLogin() {

  }
  render() {
    return (
      <View >
        <Header headerText={'Görevlerim'} />
        <UserList />
      </View>
    );
  }
}

