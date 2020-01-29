import JsonPlaceHolder from '../apis/JsonPlaceholderAPI'
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const uniqueUserIds = _.uniq(_.map(getState().posts, 'userId'));

    uniqueUserIds.forEach(id => dispatch(fetchUser(id)));
}

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await JsonPlaceHolder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        });
    }
}

export const fetchUser = (userId) => {
    return async (dispatch) => {
        const response = await JsonPlaceHolder.get(`/users/${userId}`);
        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        });
    }
}