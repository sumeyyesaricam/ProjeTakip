import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { TASK_UPDATE, TASK_FETCH_SUCCESS, TASK_CREATE ,TASK_SAVE_SUCCESS,BASE_URL} from './types';

export const taskUpdate = ({ prop, value }) => {
    return {
        type: TASK_UPDATE,
        payload: { prop, value }
    };
};
export const taskCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/tasks`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({
                    type: TASK_CREATE
                });
                Actions.taskList({ type: 'replace' })
            });
    }
};

export const taskFetch = ({personid}) => {
    //const { currentUser } = firebase.auth();

    return (dispatch) => {
        const URL = BASE_URL+`?type=0&PersonID=${personid}`;
        axios.get('http://192.168.168.2/ept/Task/GetTasks/?type=0&PersonID=1')
            .then(response => { 
                dispatch({
                    type: TASK_FETCH_SUCCESS, payload: response.data
                });
            })
            .catch((error) => {
                console.error(error);
            });
         /*fetch(URL)
         .then(response => {
             debugger;
            dispatch({
                type: TASK_FETCH_SUCCESS, payload: response.data
            });
         })
         .catch((error) => {debugger;
             console.error(error);
         });

        firebase.database().ref(`/users/${currentUser.uid}/tasks`)
            .on('value', snapshot => {
                dispatch({
                    type: TASK_FETCH_SUCCESS, payload: snapshot.val()
                });
            });*/
    }
};

export const taskSave = ({ name, phone, shift,uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/tasks/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({
                    type: TASK_SAVE_SUCCESS
                });
                Actions.taskList({ type: 'replace' })
            });
    }
};

export const taskDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/tasks/${uid}`)
            .remove()
            .then(() => {
                Actions.taskList({ type: 'replace' })
            });
    }
};