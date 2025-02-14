import { request } from '../../utils/request';
import { ACTION_TYPE } from './index';

export const logout = () => {
	request('http://localhost:3004/api/logout', 'POST');
	return { type: ACTION_TYPE.LOGOUT };
};
