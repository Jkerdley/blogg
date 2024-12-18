import styled from 'styled-components';
import { H2 } from './h2';

const ContentContainer = ({ children, error }) =>
	error ? (
		<>
			<H2>Ошибка</H2>
			<div>{error}</div>
		</>
	) : (
		children
	);

export const Content = styled(ContentContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: yellow;
`;
