import { ACTION_TYPE } from './actionTypes';

export const addComment = (comment) => ({
	type: ACTION_TYPE.ADD_COMMENT,
	payload: comment,
});
