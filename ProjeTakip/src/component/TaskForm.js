import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
import { Card, CardSection, Input } from './common';
import { connect } from 'react-redux';
import { taskUpdate, taskCreate } from '../actions';


class TaskForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Text >
                        {this.props.Title}{'\n'}{'\n'}
                    </Text>
                </CardSection>
                <CardSection>
                    <Text >
                        {this.props.Description}{'\n'}{'\n'}
                    </Text>
                </CardSection>
                <CardSection>
                    <Text >
                        {this.props.Description}{'\n'}{'\n'}
                    </Text>
                </CardSection>
                <CardSection>
                    <Input
                        label="Açıklama"
                        value={this.props.Description}
                        onChangeText={text => this.props.taskUpdate({ prop: 'phone', value: text })} />
                </CardSection>
                <CardSection >
                    <Input
                        label="Atayan Kişi"
                        value={this.props.AssignsName}
                        onChangeText={text => this.props.taskUpdate({ prop: 'phone', value: text })} />

                </CardSection>
            </View>
        );
    };
}
const mapStateProps = (state) => {
    const { name, phone, AssignsName } = state.taskForm;
    return { name, phone, AssignsName };
}
export default connect(mapStateProps, { taskUpdate, taskCreate })(TaskForm);