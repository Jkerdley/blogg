import {
	authorize,
	fetchUserRoles,
	fetchUsers,
	register,
	logout,
	updateUserRole,
	removeUser,
} from './operations';

export const server = {
	logout,
	authorize,
	register,
	fetchUsers,
	fetchUserRoles,
	updateUserRole,
	removeUser,
};
