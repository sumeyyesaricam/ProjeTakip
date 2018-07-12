import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { TASK_UPDATE, TASK_FETCH_SUCCESS, TASK_CREATE, TASK_SAVE_SUCCESS, BASE_URL, ADD_USER } from './types';

export const taskUpdate = ({ prop, value }) => {
    return {
        type: TASK_UPDATE,
        payload: { prop, value }
    };
};
export const taskCreate = ({ Title, Description, ProjectID, AssignsID }) => {
    //const { currentUser } = firebase.auth();
    return (dispatch) => {
        fetch(BASE_URL + '/Task/AddTask', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Title": Title,
                "Description": Description,
                "AssignedDate": "2018-01-20",
                "DueDate": "2018-01-20",
                "ProjectID": ProjectID,
                "AssignsID": "1",
                "Status": "1",
                "Type": "true",
            })
        })
            .then((response) => {
                if (response.status === 200) {
                    dispatch({
                        type: TASK_CREATE
                    });
                    Actions.taskList({ type: 'replace' })
                }
            })
            .catch((error) => {
                console.error(error);
            });
        /*firebase.database().ref(`/users/${currentUser.uid}/tasks`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({
                    type: TASK_CREATE
                });
                Actions.taskList({ type: 'replace' })
            });*/
    }
};

export const taskFetch = ({ personid }) => {
    //const { currentUser } = firebase.auth();

    return (dispatch) => {
        const URL = BASE_URL + `?type=0&PersonID=${personid}`;
        axios.get(BASE_URL + '/Task/GetTasks/?type=0&PersonID=1')
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

export const taskSave = ({ Title, Description, ProjectID, AssignsID, ID }) => {
    //const { currentUser } = firebase.auth();
    return (dispatch) => {
        fetch(BASE_URL + '/Task/EditTask', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "ID": ID,
                "Title": Title,
                "Description": Description,
                "AssignedDate": "2018-01-20",
                "DueDate": "2018-01-20",
                "ProjectID": ProjectID,
                "AssignsID": "1",
                "Status": "1",
                "Type": "true",
            })
        })
            .then((response) => {
                if (response.status === 200) {
                    dispatch({
                        type: TASK_SAVE_SUCCESS
                    });
                    Actions.taskList({ type: 'replace' })
                }
            })
            .catch((error) => {
                console.error(error);
            });

        /*firebase.database().ref(`/users/${currentUser.uid}/tasks/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({
                    type: TASK_SAVE_SUCCESS
                });
                Actions.taskList({ type: 'replace' })
            });*/
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

export const addUser = ({ userList }) => {
    debugger;
    return {
        type: ADD_USER,
        payload: { userList }
    };
};