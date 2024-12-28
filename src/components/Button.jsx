import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = ({ children, className, ...props }) => {
	return (
		<button type="submit" className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: ${({ margin = '0' }) => margin};
	padding: ${({ padding = '0' }) => padding};
	border: none;
	height: 32px;
	min-width: ${({ width = 'auto' }) => width};
	font-size: 16px;
	font-weight: 600;
	background-color: ${({ bgcolor = '#f3f3f3' }) => bgcolor};
	border-radius: 10px;
	box-shadow: ${({ shadow = '2px 2px 6px #e7e7e7' }) => shadow};
	cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};

	&:hover {
		background-color: ${({ disabled }) => (disabled ? '' : '#c5c5c5')};
		box-shadow: ${({ disabled }) => (disabled ? '' : '0px 0px 0px #cacaca')};
		transition:
			background-color 0.25s ease,
			box-shadow 0.2s ease;
	}
`;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
};
