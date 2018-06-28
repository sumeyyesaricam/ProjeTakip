import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './config/Router';

export default class App extends Component {
    static navigationOptions =
    {
       title: 'MainActivity',
       headerStyle: {
       backgroundColor: '#00BCD4'
     }
  
    };
    componentWillMount() {
        var config = {
            apiKey: 'AIzaSyA81rpIFOOWBjtlzuufB0jflcDLw0PR20s',
            authDomain: 'emiprojetakip.firebaseapp.com',
            databaseURL: 'https://emiprojetakip.firebaseio.com',
            projectId: 'emiprojetakip',
            storageBucket: 'emiprojetakip.appspot.com',
            messagingSenderId: '171461503499'
        };
        firebase.initializeApp(config);
        
    }
   
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}