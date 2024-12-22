import { addComment, getPost, getComments } from '../api';
import { ROLES } from '../constants';
import { sessions } from '../sessions';

export const addPostComment = async (hash, userId, postId, content) => {
	const accesRoles = [ROLES.ADMIN, ROLES.MODERATOR, ROLES.READER];

	const access = await sessions.access(hash, accesRoles);
	if (!access) {
		return {
			error: 'Доступ запрещен',
			response: null,
		};
	}
	await addComment(userId, postId, content);
	const post = await getPost(postId);
	const comments = await getComments(postId);
	return {
		error: null,
		response: {
			...post,
			comments,
		},
	};
};
