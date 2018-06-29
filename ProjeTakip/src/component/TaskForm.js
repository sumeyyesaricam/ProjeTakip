import React, { Component } from 'react';
import {
    View, Text, Image
} from 'react-native';
import { Card, CardSection, Input } from './common';
import { connect } from 'react-redux';
import { taskUpdate, taskCreate } from '../actions';


class TaskForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18 ,fontWeight: 'bold'}}>
                            {this.props.Title}
                        </Text>
                        <View style={{ flexDirection: 'row', margin: 15, alignItems: 'center' }}>
                            <Image source={require('../img/person.png')} />
                            <Text style={{ marginLeft: 5 }}>
                                {this.props.AssignsName}
                            </Text>
                            <Image style={{ marginLeft: 15 }} source={require('../img/calendar.png')} />
                            <Text style={{ marginLeft: 5, color: 'red' }}>
                                {this.props.Title}
                            </Text>
                        </View>
                        <Text style={{ margin: 10 }}>
                            {this.props.Description}
                        </Text>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={{ flexDirection: 'row', margin: 15, alignItems: 'center' }}>
                        <Image source={require('../img/project1.png')} />
                        <Text style={{ margin: 5 }}>
                            {this.props.ProjectName}
                        </Text>
                    </View>
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