import { getRoles } from '../api';
import { sessions } from '../sessions';
import { ROLES } from '../constants';

export const fetchUserRoles = async (userSession) => {
	const haveAccessRoles = [ROLES.ADMIN];
	console.log('Текущая роль пользователя в fetchRoles:', userSession.roleId);

	if (!sessions.access(userSession, haveAccessRoles)) {
		return {
			error: 'Доступ запрещен',
			response: null,
		};
	}

	const roles = await getRoles();
	console.log('Roles', roles);
	return {
		error: null,
		response: roles,
	};
};

// export const fetchUserRoles = async (sessionId) => {
// 	const haveAccessRoles = [ROLES.ADMIN];

// 	if (!sessionId) {
// 		return {
// 			error: 'Доступ запрещен',
// 			response: null,
// 		};
// 	}

// 	const userData = sessions.list[sessionId];
// 	console.log('User data from session:', userData);

// 	if (!sessions.access(sessionId, haveAccessRoles)) {
// 		return {
// 			error: 'Доступ запрещен',
// 			response: null,
// 		};
// 	}

// 	const roles = await getRoles();
// 	return {
// 		error: null,
// 		response: roles,
// 	};
// };
