import { updatePost } from '../api';
import { ROLES } from '../constants';
import { sessions } from '../sessions';

export const savePost = async (hash, newPostData) => {
	const accesRoles = [ROLES.ADMIN];

	const access = await sessions.access(hash, accesRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			response: null,
		};
	}

	const updatedPost = await updatePost(newPostData);
	return {
		error: null,
		response: updatedPost,
	};
};
