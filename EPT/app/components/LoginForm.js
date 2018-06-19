import React, { Component } from 'react';
import {
    View, TextInput, Text
} from 'react-native';
import {
    Button, Card, CardSection, Input, Spinner
} from './common';
//import firebase from 'react-native-firebase';
class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        /*firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));

            });*/
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Giriş Yap
            </Button>
        );
    }
    onLoginFail() {
        this.setState({ error: "Authontication failed", loading: false });
    }
    onLoginSuccess() {
        this.setState({
            error: '',
            loading: false,
            email: '',
            password: ''
        });
    }
    render() {
        return (
            <Card >
                <CardSection>
                    <Input
                        secureTextEntry={false}
                        placeholder="sum@gmail.com"
                        label="E-Mail"
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })} />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry={true}
                        placeholder="şifre"
                        label="Şifre"
                        value={this.state.password}
                        onChangeText={text => this.setState({ password: text })} />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error} </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
}
export default LoginForm;