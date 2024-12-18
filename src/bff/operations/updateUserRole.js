import { setNewUserRole } from '../api';
import { ROLES } from '../constants';
import { sessions } from '../sessions';

export const updateUserRole = async (userSession, userId, userNewRoleId) => {
	const haveAccessRoles = [ROLES.ADMIN];

	if (!sessions.access(userSession, haveAccessRoles)) {
		console.error('userSession is null or undefined');
		return {
			error: 'Доступ запрещен',
			response: null,
		};
	}
	await setNewUserRole(userId, userNewRoleId);
	return {
		error: null,
		response: true,
	};
};
