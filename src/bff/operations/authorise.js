import { getUser } from '../api';
import { sessions } from '../sessions';

export const authorize = async (authLogin, authPassword) => {
	const user = await getUser(authLogin);

	if (!user) {
		return { error: 'User not found', response: null };
	}

	const { id, login, password, roleId } = user;

	if (authPassword !== password) {
		return { error: 'Invalid password', response: null };
	}
	const sessionData = { id, login, roleId };
	const sessionId = sessions.create(sessionData);
	return {
		error: null,
		response: {
			id,
			login,
			roleId,
			session: sessionId,
		},
	};
};

// session: sessions.create(user)
