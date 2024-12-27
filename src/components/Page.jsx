import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	margin-top: 120px;
	min-height: 100%;
`;

export const Page = ({ children }) => {
	return <Div>{children}</Div>;
};
