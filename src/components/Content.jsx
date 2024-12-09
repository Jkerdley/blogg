import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
	color: red;
	font-weight: bold;
	margin-top: 120px;
`;

export const Content = ({ children }) => {
	return <Div>{children}</Div>;
};
