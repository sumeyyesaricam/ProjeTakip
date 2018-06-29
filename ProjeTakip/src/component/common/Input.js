import React, { Component } from 'react';
import {
    Text, View, TextInput,Image
} from 'react-native';
import Dimensions from 'Dimensions';


const Input = ({ value, onChangeText, placeholder, secureTextEntry ,source}) => {

    const { inputStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Image source={source} style={styles.inlineImg} />
            <TextInput
                secureTextEntry={secureTextEntry}
                style={inputStyle}
                value={value}
                autoCorrect={false}
                placeholder={placeholder}
                onChangeText={onChangeText}
                placeholderTextColor="white"
                underlineColorAndroid="transparent" />
        </View>
    );
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = {
    inputStyle: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: '#ffffff',
    },
    containerStyle: {
        flex: 1,
    }, inlineImg: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 35,
        top: 9,
    },
}
export { Input };