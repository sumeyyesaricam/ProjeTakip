import React, { Component } from 'react';
import {
    View, LayoutAnimation, Text, TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class LisItem extends Component {

    componentWillUpdate() {
        console.log("Update ");
        LayoutAnimation.spring();
    }
    renderDescription() {
        const { library, expanded } = this.props;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {this.props.library.description}
                    </Text>
                </CardSection>);

        }
    }
    render() {
        console.log("render");
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={{ flex: 1 }}>
                            {this.props.library.title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
}

export default connect(mapStateToProps, actions)(LisItem);