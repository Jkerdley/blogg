import { request } from '../../utils/request';
import { addComment } from './addComment';
export const addCommentAsync = (postId, content) => (dispatch) => {
	request(`/api/posts/${postId}/comments`, 'POST', { content }).then((comment) => {
		dispatch(addComment(comment.data));
	});
};
