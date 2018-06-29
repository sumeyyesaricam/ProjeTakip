import React, { Component } from 'react';
import {
    View, Text, Image,KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner, BackgroundImage } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import person from '../img/person.png';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
        //Actions.main();
    }
    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>);
        }
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Giriş Yap
            </Button>
        );
    }
    render() {
        return (
            <BackgroundImage >
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <Image source={require('../img/logo.jpg')} style={{ justifyContent: 'center', alignItems: 'center' }} />
                    <Input
                        source={person}
                        label="Email"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email} />
                    <Input
                        label="Şifre"
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password} />
                    {this.renderError()}
                    {this.renderButton()}
                </KeyboardAvoidingView >
            </BackgroundImage>
        );
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 16,
        alignSelf: 'center',
        color: 'red'
    }, container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
}
const mapStateProps = ({ auth }) => {
    const { email, password, loading, error } = auth;
    return { email, password, error, loading };
}

export default connect(mapStateProps, { emailChanged, passwordChanged, loginUser })(LoginForm);