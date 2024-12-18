import { deleteUser } from '../api';
import { ROLES } from '../constants';
import { sessions } from '../sessions';

export const removeUser = async (userSession, userId) => {
	const haveAccessRoles = [ROLES.ADMIN];

	if (!sessions.access(userSession, haveAccessRoles)) {
		console.error('userSession is null or undefined');
		return {
			error: 'Доступ запрещен',
			response: null,
		};
	}
	deleteUser(userId);
	return {
		error: null,
		response: true,
	};
};
