
import React from 'react';
import {
  Text,
  View, TouchableHighlight, Image, TouchableOpacity
} from 'react-native';
import CardSection from './CardSection'

const NavigationBar = () => {

  return (
    <View >
      <CardSection>
        <Text style={{ flex: 6, marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
          Sümeyye
        </Text>
        <TouchableHighlight style={{ marginLeft: 5, flex: 1 }} onPress={() => console.log("icon press")}>
          <Image source={require('../../img/tick.png')} />
        </TouchableHighlight>
        <TouchableHighlight style={{ flex: 1 }} onPress={() => console.log("icon press")}>
          <Image source={require('../../img/project1.png')} />
        </TouchableHighlight>
        <TouchableHighlight style={{ flex: 1 }} onPress={() => console.log("icon press")}>
          <Image source={require('../../img/chat1.png')} />
        </TouchableHighlight>
      </CardSection>
    </View>

  );
}
export { NavigationBar }