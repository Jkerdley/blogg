import styled from 'styled-components';
import { Error } from './Error';

const ContentContainer = ({ children, error }) => (error ? <Error error={error} /> : children);

export const Content = styled(ContentContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: yellow;
`;
