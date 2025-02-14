import { request } from '../../utils/request';

export const removePostAsync = (postId) => () => request(`http://localhost:3004/posts/${postId}`, 'DELETE');
