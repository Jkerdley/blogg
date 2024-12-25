import { transformPost } from './transformers';

export const getPosts = (page, limit) => {
	console.log('page', page, 'limit', limit);
	return fetch(`http://localhost:3005/posts?_page=${page}&_limit=${limit}`)
		.then((loadedPosts) => loadedPosts.json())
		.then((loadedPosts) => loadedPosts && loadedPosts.map(transformPost));
};
