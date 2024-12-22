import { ACTION_TYPE } from '../actions/index';
import { ROLES } from '../../constants/roles';

const initialUserState = {
	user: null,
	id: null,
	roleId: ROLES.GUEST,
	session: null,
};
export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER: {
			return { ...state, ...action.payload };
		}
		case ACTION_TYPE.LOGOUT:
			return initialUserState;
		default:
			return state;
	}
};
