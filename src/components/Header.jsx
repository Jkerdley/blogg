import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
	padding-bottom: 120px;
	color: #6d15fa;
	font-weight: bold;
`;

export const Header = () => {
	return (
		<Div>
			<i className="fa fa-calendar"></i> LOGO
		</Div>
	);
};
