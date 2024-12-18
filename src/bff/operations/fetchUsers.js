import { getUsers } from '../api';
import { sessions } from '../sessions';
import { ROLES } from '../constants';

export const fetchUsers = async (userSession) => {
	const haveAccessRoles = [ROLES.ADMIN];

	if (!sessions.access(userSession, haveAccessRoles)) {
		console.error('userSession is null or undefined');
		return {
			error: 'Доступ запрещен',
			response: null,
		};
	}
	if (!sessions.access(userSession, haveAccessRoles)) {
		return {
			error: 'Доступ запрещен',
			response: null,
		};
	}

	const users = await getUsers();
	return {
		error: null,
		response: users,
	};
};

// export const fetchUsers = async (sessionId) => {
// 	const haveAccessRoles = [ROLES.ADMIN];

// 	if (!sessionId) {
// 		console.error('Session ID is null or undefined');
// 		return {
// 			error: 'Доступ запрещен',
// 			response: null,
// 		};
// 	}

// 	const userData = sessions.list[sessionId];

// 	if (!userData || !userData.roleId) {
// 		return {
// 			error: 'Доступ запрещен',
// 			response: null,
// 		};
// 	}

// 	if (!sessions.access(sessionId, haveAccessRoles)) {
// 		return {
// 			error: 'Доступ запрещен',
// 			response: null,
// 		};
// 	}

// 	const users = await getUsers();
// 	return {
// 		error: null,
// 		response: users,
// 	};
// };
