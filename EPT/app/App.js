
import React, { Component } from 'react';
import {
    View
} from 'react-native';
import {
    Header, Button, Spinner
} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null }
    componentWillMount() {
        /*firebase.initializeApp({
            apiKey: "AIzaSyA81rpIFOOWBjtlzuufB0jflcDLw0PR20s",
            authDomain: "emiprojetakip.firebaseapp.com",
            databaseURL: "https://emiprojetakip.firebaseio.com",
            projectId: "emiprojetakip",
            storageBucket: "emiprojetakip.appspot.com",
            messagingSenderId: "171461503499"
        });
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });

            }
        });*/
        this.setState({ loggedIn: true });

    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (<Button onPress={() => this.setState({ loggedIn: true })}> Çıkış Yap </Button>);
            case false:
                return (<LoginForm />);
            default:
                return (<Spinner size="large" />);
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText={'Auth'} />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;