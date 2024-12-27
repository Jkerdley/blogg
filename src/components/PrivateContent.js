import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Error } from './Error';
import { selectUserRole } from '../store/selectors';
import { ERRORS } from '../constants/error';
import { checkAccess } from '../utils/check-access';

const ContentContainer = ({ children, access, serverError = null }) => {
	const userRole = useSelector(selectUserRole);
	const accessError = checkAccess(access, userRole) ? null : ERRORS.ACCESS_DENIED;
	const error = serverError || accessError;
	return error ? <Error error={error} /> : children;
};

export const PrivateContent = styled(ContentContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: yellow;
	font-size: 18px;
`;
