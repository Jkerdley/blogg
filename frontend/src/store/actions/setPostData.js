import { ACTION_TYPE } from './actionTypes';

export const setPostData = (postData) => ({
	type: ACTION_TYPE.SET_POST_DATA,
	payload: postData,
});
