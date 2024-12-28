import PropTypes from 'prop-types';
import { ROLES } from './roles';

const ROLES_ID = PropTypes.oneOf(Object.values(ROLES));

export const PROP_TYPE = {
	ROLE_ID: ROLES_ID,
	ROLES: PropTypes.shape({
		id: ROLES_ID,
		name: PropTypes.string.isRequired,
	}),
	ERROR: PropTypes.oneOfType([PropTypes.string, PropTypes.exact(null)]),
	COMMENT: PropTypes.shape({
		id: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		publishedAt: PropTypes.string.isRequired,
		postId: PropTypes.string.isRequired,
	}),
};
