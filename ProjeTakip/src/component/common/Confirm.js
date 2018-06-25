import React from 'react';
import {
    Text, View, Modal
} from 'react-native';
import CardSection from './CardSection';
import Button from './Button';


const Confirm = ({ children, visible}) => {
    const { cardSectionStyle, textStyle, containerStyle } = styles;
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}>
            <View style={containerStyle}>
                <CardSection >
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>
                <CardSection >
                    <Button onPress={()=>{console.log("onAccept")}}>
                        Evet
                    </Button>
                    <Button onPress={()=>{console.log("Decline")}}>
                        Hayır
                     </Button>
                </CardSection>
            </View>
        </Modal>
    );
}
const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    }, textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    }, containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}
export { Confirm };