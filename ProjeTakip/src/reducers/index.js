import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TaskFormReducer from './TaskFormReducer';
import TaskReducer from './TaskReducer';
import UserReducer from './UserReducer';
import ProjectReducer from './ProjectReducer';

export default combineReducers({
    auth:AuthReducer,
    taskForm:TaskFormReducer,
    taskListResponse:TaskReducer,
    userListResponse:UserReducer,
    projectListResponse:ProjectReducer,
    
})