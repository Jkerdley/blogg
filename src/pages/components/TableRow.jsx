import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableRowContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;
	border: ${({ border }) => (border ? 'solid 1px #ebebeb' : 'none')};
	& > div {
		padding: 0 10px;
	}

	& .user-login-column {
		width: 172px;
	}
	& .user-registered-at-column {
		width: 212px;
	}
	& .user-role-column {
		width: auto;
	}
`;

TableRow.propTypes = {
	children: PropTypes.node.isRequired,
};
