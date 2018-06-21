import React, { Component } from 'react';
import {
    View, Text, Picker
} from 'react-native';
import { Card, CardSection, Button, Input } from './common';
import { connect } from 'react-redux';
import { taskUpdate, taskCreate } from '../actions';


class TaskCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.taskCreate({ name, phone, shift:shift || 'Monday' });
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="İsim"
                        value={this.props.name}
                        onChangeText={value => this.props.taskUpdate({ prop: 'name', value })} />
                </CardSection>
                <CardSection>
                    <Input
                        label="Telefon No"
                        value={this.props.phone}
                        onChangeText={text => this.props.taskUpdate({ prop: 'phone', value: text })} />
                </CardSection>
                <CardSection >
                    <Picker style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.taskUpdate({ prop: 'shift', value: day })}>
                        <Picker.Item label="Pazartesi" value="Monday" />
                        <Picker.Item label="Salı" value="Tuesday" />
                        <Picker.Item label="Çarşamba" value="Wednesday" />
                        <Picker.Item label="Perşembe" value="Thursday" />
                        <Picker.Item label="Cuma" value="Friday" />
                        <Picker.Item label="Cumartesi" value="Saturday" />
                        <Picker.Item label="Pazar" value="Sunday" />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Kaydet
            </Button>
                </CardSection>
            </Card>
        );
    };
}
const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}
const mapStateProps = (state) => {
    const { name, phone, shift } = state.taskForm;
    return { name, phone, shift };
}
export default connect(mapStateProps, { taskUpdate, taskCreate })(TaskCreate);