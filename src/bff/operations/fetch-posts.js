import { getComments, getPosts } from '../api';
import { getCommentsCount } from '../utils';

export const fetchPosts = async (page, limit) => {
	const [posts, comments] = await Promise.all([getPosts(page, limit), getComments()]);
	console.log('Fetched posts in fetch.js:', posts);
	return {
		error: null,
		response: posts.map((post) => ({
			...post,
			commentsCount: getCommentsCount(comments, post.id),
		})),
	};
};
