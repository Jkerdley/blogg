import styled from 'styled-components';
import { H2 } from './h2';
import { PROP_TYPE } from '../constants/prop-type';

const ErrorContainer = ({ className, error }) =>
	error && (
		<div className={className}>
			<H2>Ошибка</H2>
			<div>{error}</div>
		</div>
	);

export const Error = styled(ErrorContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	& > div {
		font-size: 18px;
	}
`;

Error.propTypes = {
	error: PROP_TYPE.ERROR,
};
