import { getUser } from './get-user';
import { addUser } from './add-user';
import { createSession } from './create-session';

export const server = {
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return { error: 'User not found', response: null };
		}
		if (authPassword !== user.userPassword) {
			return { error: 'Invalid password', response: null };
		}

		return {
			error: null,
			response: createSession(user.role_id),
		};
	},
	async register(regLogin, regPassword) {
		const user = await getUser(regLogin);

		if (user) {
			return { error: 'Логин уже занят', response: null };
		}
		addUser(regLogin, regPassword);

		return {
			error: null,
			response: createSession(user.role_id),
		};
	},
};
