import { ACTION_TYPE } from '../actions/index';
import { ROLES } from '../../constants/roles';

const initialUsersState = {
	user: null,
	id: null,
	roleId: ROLES.GUEST,
	session: null,
};
export const usersReducer = (state = initialUsersState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
