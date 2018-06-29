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
    backgroundImage: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}
export { BackgroundImage };