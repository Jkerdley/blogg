import { request } from '../../utils/request';
import { addComment } from './addComment';
export const addCommentAsync = (postId, content) => (dispatch) => {
	request(`http://localhost:3004/api/posts/${postId}/comments`, 'POST', { content }).then((comment) => {
		dispatch(addComment(comment.data));
	});
};
