
import {
    TASK_UPDATE, TASK_CREATE, TASK_SAVE_SUCCESS, ADD_USER
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: 'Monday',
    userList:[]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TASK_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case ADD_USER:
        debugger;
                return { ...state, [action.payload.prop]: action.payload.value };
        case TASK_CREATE:
            return INITIAL_STATE;
        case TASK_SAVE_SUCCESS:
            return INITIAL_STATE;

        default:
            return state;
    }
};