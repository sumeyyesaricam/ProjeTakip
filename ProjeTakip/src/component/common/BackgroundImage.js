import React, { Component } from 'react';
import {
    ImageBackground,
} from 'react-native';

class BackgroundImage extends Component {

    render() {
        return (
            <ImageBackground source={require('./background.jpg')}
                style={styles.backgroundImage}>
                {this.props.children}
            </ImageBackground>
        )
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 16,
        alignSelf: 'center',
        color: 'red'
    }, backgroundImage: {
        flexGrow:1,
        height:null,
        width:null,
        flex:1,
        alignItems: 'stretch',
        justifyContent:'center',
    }
}
export { BackgroundImage };