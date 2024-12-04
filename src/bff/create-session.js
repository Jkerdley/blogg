import { removeComment } from './session/remove-comment';
import { ROLES } from '../constants/roles';

export const createSession = (role_id) => {
	const session = {
		logout() {
			Object.keys(session).forEach((key) => {
				delete session[key];
			});
		},
	};

	switch (role_id) {
		case ROLES.ADMIN: {
			session.removeComment = removeComment;
			break;
		}
		case ROLES.MODERATOR: {
			session.removeComment = removeComment;
			break;
		}
		case ROLES.READER: {
			break;
		}
		default:
			console.log('Ваша роль в этом мире не определена');
	}
	return session;
};
