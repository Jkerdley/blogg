import { request } from '../../utils/request';

export const removePostAsync = (postId) => () => request(`/api/posts/${postId}`, 'DELETE');
