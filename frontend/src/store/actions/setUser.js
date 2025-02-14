import { ACTION_TYPE } from './index';

export const setUser = (user) => ({
	type: ACTION_TYPE.SET_USER,
	payload: user,
});
