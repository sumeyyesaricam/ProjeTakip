import React, { Component } from 'react';
import _ from 'lodash';
import {
    View, Text, Image, ScrollView
} from 'react-native';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, NavBar, Input } from './common';
import { connect } from 'react-redux';
import { taskUpdate, taskSave, taskDelete } from '../actions';
import TaskForm from './TaskForm';

class TaskEdit extends Component {

    state = { showModal: false }
    componentWillMount() {
        _.each(this.props.task, (value, prop) => {
            this.props.taskUpdate({ prop, value });
        });
    }
    onButtonPress() {
        const { Title, Description, AssignsName } = this.props;
        this.props.taskSave({ Title, Description, AssignsName, uid: this.props.task.ID });
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                    <CardSection>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            {this.props.Title}
                        </Text>
                    </CardSection>
                    <CardSection >
                        <View style={styles.editStyle}>
                            <Image source={require('../img/person.png')} />
                            <Input style={{ margin: 5 }}
                                label="Atanan Kişi"
                                value={this.props.AssignsName}
                                onChangeText={text => this.props.taskUpdate({ prop: 'assignsName', value: text })} />
                        </View>
                    </CardSection>
                    <CardSection >
                        <View style={styles.editStyle}>
                            <Image source={require('../img/calendar.png')} />
                            <Input style={{ margin: 5 }}
                                label="Bitiş Tarihi"
                                value={this.props.AssignsName}
                                onChangeText={text => this.props.taskUpdate({ prop: 'dueDate', value: text })} />
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.editStyle}>
                            <Image source={require('../img/description.png')} />
                            <Input style={{ margin: 5 }}
                                label="Açıklama"
                                value={this.props.Description}
                                onChangeText={text => this.props.taskUpdate({ prop: 'description', value: text })} />
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.editStyle}>
                            <Image source={require('../img/project1.png')} />
                            <Input style={{ margin: 5 }}
                                label="Proje Adı"
                                value={this.props.ProjectName}
                                onChangeText={text => this.props.taskUpdate({ prop: 'projectName', value: text })} />
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.editStyle}>
                            <Image source={require('../img/file.png')} />
                            <Input style={{ margin: 5 }}
                                label="Dosya Ekle"
                                value={this.props.Description}
                                onChangeText={text => this.props.taskUpdate({ prop: 'file', value: text })} />
                        </View>
                    </CardSection>
            </ScrollView>
        );
    };
}
const styles = {
    editStyle: {
        flexDirection: 'row',
        flex: 1,
        margin: 10,
        alignItems: 'center'
    }
}
const mapStateProps = (state) => {
    const { Title, Description, AssignsName,ProjectName } = state.taskForm;
    return { Title, Description, AssignsName,ProjectName };
}
export default connect(mapStateProps, { taskUpdate, taskSave, taskDelete })(TaskEdit);