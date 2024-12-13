import React from 'react';
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
	padding: ${({ padding = '0' }) => padding};
	border: none;
	height: 32px;
	min-width: ${({ width = 'auto' }) => width};
	font-size: 16px;
	font-weight: 600;
	background-color: #ececec;
	border-radius: 10px;
	box-shadow: 2px 2px 6px #cacaca;
	cursor: pointer;
	&:hover {
		background-color: #c5c5c5;
		box-shadow: 0px 0px 0px #cacaca;
		transition:
			background-color 0.25s ease,
			box-shadow 0.2s ease;
	}
`;
