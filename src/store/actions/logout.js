import { ACTION_TYPE } from './index';
import { server } from '../../bff/server';

export const logout = (session) => {
	server.logout(session);
	return { type: ACTION_TYPE.LOGOUT };
};
