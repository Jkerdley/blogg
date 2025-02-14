import { ACTION_TYPE } from './actionTypes';

export const removeComment = (commentId) => ({
	type: ACTION_TYPE.REMOVE_COMMENT,
	payload: commentId,
});
