import React, { Component } from 'react';
import {
    View, Text, Image
} from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner, BackgroundImage } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';


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
                    <Card >
                        <CardSection>
                            <Image source={require('../img/logo.jpg')} style={{ justifyContent: 'center', alignItems: 'center' }} />
                        </CardSection>
                        <CardSection>
                            <Input
                                label="Email"
                                onChangeText={this.onEmailChange.bind(this)}
                                value={this.props.email} />
                        </CardSection>
                        <CardSection>
                            <Input
                                label="Şifre"
                                secureTextEntry
                                onChangeText={this.onPasswordChange.bind(this)}
                                value={this.props.password} />
                        </CardSection>
                        {this.renderError()}
                        <CardSection>
                            {this.renderButton()}
                        </CardSection>
                    </Card>
            </BackgroundImage>
        );
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 16,
        alignSelf: 'center',
        color: 'red'
    }, backgroundImage: {
        flexGrow:1,
        height:null,
        width:null,
        alignItems: 'center',
        justifyContent:'center',
    }
}
const mapStateProps = ({ auth }) => {
    const { email, password, loading, error } = auth;
    return { email, password, error, loading };
}

export default connect(mapStateProps, { emailChanged, passwordChanged, loginUser })(LoginForm);