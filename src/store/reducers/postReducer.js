import { ACTION_TYPE } from '../actions/index';
import { ROLES } from '../../constants/roles';

const initialPostState = {
	user: null,
	id: null,
	roleId: ROLES.GUEST,
	session: null,
};
export const postReducer = (state = initialPostState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
