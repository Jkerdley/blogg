import { request } from '../../utils/request';
import { removeComment } from './removeComment';
export const removeCommentAsync = (postId, id) => (dispatch) => {
	request(`http://localhost:3004/posts/${postId}/comments/${id}`, 'DELETE').then(() => {
		dispatch(removeComment(id));
	});
};
