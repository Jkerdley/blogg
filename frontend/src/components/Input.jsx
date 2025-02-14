import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputContainer = forwardRef(({ className, ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
	height: 40px;
	font-size: 18px;
	margin-bottom: ${({ marginb = '10px' }) => marginb};
	min-width: ${({ width = '100%' }) => width};
	min-height: 38px;
	padding: ${({ padding = '10px' }) => padding};
	border-radius: 10px;
	border: 1px solid grey;
`;

Input.propTypes = {
	padding: PropTypes.string,
	marginb: PropTypes.string,
	width: PropTypes.string,
};
