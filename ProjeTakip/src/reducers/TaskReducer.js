
import {
    TASK_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
    debugger;
    switch (action.type) {
        case TASK_FETCH_SUCCESS:
            console.log(action);
            return action.payload;
        default:
            return state;
    }
};