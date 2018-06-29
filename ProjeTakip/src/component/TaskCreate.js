import React, { Component } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, Image, SearchBar
} from 'react-native';
import { Card, CardSection, Button, CustomButton } from './common';
import { connect } from 'react-redux';
import { taskUpdate, taskCreate } from '../actions';

class TaskCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.taskCreate({ name, phone, shift: shift || 'Monday' });
    }
    render() {
        return (
            <Card style={{ backgroundColor: 'white', flexDirection: 'column', flex: 1 }}>
                <CardSection style={{ flex: 1 }}>
                    <SearchBar
                        onChangeText={()=>{console.log("changeText")}}
                        onClear={()=>{console.log("clear")}}
                        placeholder='Type Here...' />
                </CardSection>
                <CardSection style={{ flex: 1 }}>
                    <TextInput style={styles.textInputStyle}
                        value={this.props.Title}
                        autoCorrect={false}
                        placeholder={"Görev Başlığı"}
                        onChangeText={text => this.props.taskUpdate({ prop: 'Title', value: text })} />
                </CardSection>
                <CardSection style={{ flex: 8 }}>
                    <TextInput style={styles.textInputStyle}
                        value={this.props.Description}
                        autoCorrect={false}
                        multiline={true}
                        placeholder={"Görev Açıklamasi"}
                        onChangeText={text => this.props.taskUpdate({ prop: 'Description', value: text })} />
                </CardSection>
                <CardSection style={{ flex: 1 }}>
                    <View style={{
                        flexDirection: 'row',
                        margin: 10,
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={styles.touchOpacityText} onPress={() => {
                            console.log("press");
                        }}>
                            <Image source={require('../img/file.png')} />
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.touchOpacityText} onPress={() => {
                            console.log("press");
                        }}>
                            <Image source={require('../img/person.png')} />
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.touchOpacityText} onPress={() => {
                            console.log("press");
                        }}>
                            <Image source={require('../img/calendar.png')} />
                        </TouchableOpacity >
                        <TouchableOpacity style={[styles.touchOpacityText, {}]} onPress={() => {
                            console.log("press");
                        }}>
                            <Image source={require('../img/send.png')} />
                        </TouchableOpacity >
                    </View>
                </CardSection>
            </Card>
        );
    };
}
const styles = {
    textInputStyle: {
        flex: 1,
        margin: 10
    },
    touchOpacityText: {
        margin: 5
    }
}
const mapStateProps = (state) => {
    const { name, phone, shift } = state.taskForm;
    return { name, phone, shift };
}
export default connect(mapStateProps, { taskUpdate, taskCreate })(TaskCreate);