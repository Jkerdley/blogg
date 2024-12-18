export const sessions = {
	list: {},
	create(user) {
		const hash = Math.random().toFixed(50);
		this.list[hash] = user;
		return hash;
	},

	remove(hash) {
		delete this.list[hash];
	},
	access(hash, haveAccessRoles) {
		const user = this.list[hash];
		return user && haveAccessRoles.includes(user.roleId);
	},
};

// access(sessionId, allowedRoles) {
// 	const userData = this.list[sessionId];
// 	return userData && allowedRoles.includes(userData.roleId);
// },
