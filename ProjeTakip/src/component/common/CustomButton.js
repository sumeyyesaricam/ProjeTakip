import React, { Component } from 'react';
import {
    SearchBar, View, TextInput, TouchableOpacity
} from 'react-native';



const CustomButton = ({ onChangeText, onPress }) => {

    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <SearchBar
                clearIcon={{ color: 'red' }}
                searchIcon={false} // You could have passed `null` too
                onChangeText={onChangeText}
                onClear={onPress}
                placeholder='Type Here...' />
        </View>
    );
}
const styles = {
    containerStyle: {
        height: 30,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        paddingHorizontal: 50,
        paddingVertical: 10,
        backgroundColor: 'red'

    }
}
export { CustomButton };