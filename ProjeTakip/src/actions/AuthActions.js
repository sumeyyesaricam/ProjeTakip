import firebase from 'firebase';
import {
    Text, View, Alert
} from 'react-native';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    BASE_URL
} from './types';
import { Actions } from 'react-native-router-flux';

export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
}
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_USER
        });
        fetch(BASE_URL + '/Person/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Username": email,
                "Password": password,
                "RegId": "",
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.id !== null && responseJson.id !== "") {
                    loginUserSuccess(dispatch, responseJson.id)
                }
            })
            .catch((error) => {
                console.error(error);
            });

        /*firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });*/
    };
}

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
}
const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
}