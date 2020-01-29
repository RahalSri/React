import { combineReducers } from 'redux';
import postReducer from './PostReducer';
import usersReducer from './UsersReducer';

export default combineReducers({
    posts: postReducer,
    users: usersReducer
});