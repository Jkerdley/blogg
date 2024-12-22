import { deleteComment, getPost, getComments } from '../api';
import { ROLES } from '../constants';
import { sessions } from '../sessions';

export const removePostComment = async (hash, postId, id) => {
	const accesRoles = [ROLES.ADMIN, ROLES.MODERATOR];

	const access = await sessions.access(hash, accesRoles);
	if (!access) {
		return {
			error: 'Доступ запрещен',
			response: null,
		};
	}
	await deleteComment(id);
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
