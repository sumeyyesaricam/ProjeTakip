import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';


export default class App extends Component {
  goLogin() {

  }
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar text='Sümeyye' />
        <TextInput style={styles.welcome} placeholder="Kullanıcı Adı" />
        <TextInput style={styles.instructions} placeholder="Şifre" />
        <Button
          title="Giriş"
          color="#4285f4"
          onPress={this.goLogin.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15
  }
});
