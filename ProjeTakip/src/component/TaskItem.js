import React, { Component } from 'react';
import {
    View, LayoutAnimation, Text, TouchableWithoutFeedback
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class TaskItem extends Component {

    onRowPress() {
        Actions.taskEdit({ task: this.props.task });
    }
    render() {
        const { name } = this.props.task;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.onRowPress.bind(this)}
            >
                <View>
                    <CardSection>
                        <Text style={{ flex: 1 }}>
                            {name}
                        </Text>
                    </CardSection>
                   
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.task.uid;
    return { expanded };
}

export default connect(mapStateToProps, actions)(TaskItem);