import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconContainer = ({ className, id }) => (
	<div className={className}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '20px' }) => size};
	margin: ${({ margin = '0' }) => margin};
`;

Icon.propTypes = {
	id: PropTypes.string.isRequired,
};
