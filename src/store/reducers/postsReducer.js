import { ACTION_TYPE } from '../actions/index';
import { ROLES } from '../../constants/roles';

const initialPostsState = {
	user: null,
	id: null,
	roleId: ROLES.GUEST,
	session: null,
};
export const postsReducer = (state = initialPostsState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
