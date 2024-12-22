import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../Icon';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../../store/selectors';
import { ROLES } from '../../../constants/roles';
import { logout } from '../../../store/actions';

const UserLogin = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	font-weight: 500;
`;
const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;
const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	border: none;
	height: 32px;
	width: auto;
	margin-top: 4px;
	padding-left: 10px;
	padding-right: 5px;
	font-size: 16px;
	font-weight: 500;
	background-color: #ececec;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: #c5c5c5;
		transition: background-color 0.2s ease;
	}
`;

const ControlPanelContainer = ({ className }) => {
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onLogout = () => {
		dispatch(logout(session));
		sessionStorage.removeItem('userData');
	};
	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLES.GUEST ? (
					<StyledLink padding="0 10px 0 20px" to="/login">
						ВОЙТИ{' '}
						<Icon id="fa-sign-in" size="20px" margin="5px  5px  5px 5px" />
					</StyledLink>
				) : (
					<>
						<UserLogin>{login}</UserLogin>
						<StyledLink padding="0 10px 0 20px" onClick={onLogout}>
							<Icon
								id="fa-sign-out"
								size="20px"
								margin="5px  5px  5px 5px"
							/>
						</StyledLink>
					</>
				)}
			</RightAligned>
			<RightAligned>
				<StyledLink onClick={() => navigate(-1)}>
					<Icon id="fa-backward" size="18px" margin="5px 8px 5px 0px" />
				</StyledLink>
				<StyledLink to="/post">
					<Icon id="fa-file-text-o" size="18px" margin="5px 5px 5px 0px" />
				</StyledLink>
				<StyledLink to="/users">
					<Icon id="fa-users" size="18px" margin="5px 5px 5px 0px" />
				</StyledLink>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	margin-right: 20px;
	margin-top: 20px;
`;
