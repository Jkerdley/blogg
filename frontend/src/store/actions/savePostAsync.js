import { request } from '../../utils/request';
import { setPostData } from './setPostData';

export const savePostAsync = (id, newPostData) => (dispatch) => {
	const saveRequest = id
		? request(`http://localhost:3004/api/posts/${id}`, 'PATCH', newPostData)
		: request('http://localhost:3004/api/posts', 'POST', newPostData);

	return saveRequest.then((updatedPost) => {
		dispatch(setPostData(updatedPost.data));
		return updatedPost.data;
	});
};
