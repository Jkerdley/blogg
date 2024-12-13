import { getUser } from './get-user';
import { addUser } from './add-user';
import { sessions } from './sessions';

export const server = {
	async logout(session) {
		sessions.remove(session);
	},
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return { error: 'User not found', response: null };
		}
		if (authPassword !== user.password) {
			return { error: 'Invalid password', response: null };
		}

		return {
			error: null,
			response: {
				login: user.login,
				id: user.id,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
	async register(regLogin, regPassword) {
		const user = await getUser(regLogin);

		if (user) {
			return { error: 'Логин уже занят', response: null };
		}
		await addUser(regLogin, regPassword);

		return {
			error: null,
			response: {
				login: user.login,
				id: user.id,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
};
