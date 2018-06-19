import React, { Component } from 'react';
import {
    Text, View, Image,Linking
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const UserDetail = ({ user }) => {

    const { Name, Surname } = user;
    const { imageStyle, headerContentStyle } = styles;
    return (
        <Card>
            <CardSection>
                <View>
                    <Image style={imageStyle} source={{ uri: "http://172.16.200.16/TDYS/images/ig.jpg" }} />
                </View>
                <View style={headerContentStyle}>
                    <Text>
                        {Name}
                    </Text>
                    <Text>
                        {Surname}
                    </Text>
                </View>
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL("https://www.hepsiburada.com/sharpie-fine-permanent-markor-30lu-kutu-aslan-p-HBV00000C1CPI")} >
                Satın Al
            </Button>
            </CardSection>

        </Card>
    );
}
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    imageStyle: {
        height: 50,
        width: 100
    }
}
export default UserDetail;