import { useEffect, useState } from 'react';
import { useServerRequest } from '../hooks';
import { H2 } from '../components/index.js';
import { UserRow, TableRow } from './components';
import { Content } from '../components';
import styled from 'styled-components';
import { ROLES } from '../constants/roles.js';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../store/selectors/select-user-role.js';

const UsersList = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: 400;
	width: 100%;
`;

const UsersPageContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const requestServer = useServerRequest();
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
	const userRoleId = useSelector(selectUserRole);

	useEffect(() => {
		Promise.all([requestServer('fetchUsers'), requestServer('fetchUserRoles')]).then(
			([usersResponse, rolesResponse]) => {
				if (usersResponse.error || rolesResponse.error) {
					setErrorMessage(usersResponse.error || rolesResponse.error);
					return;
				}
				console.log(
					'User Response  USERPAGE',
					usersResponse.response,
					'Roles Response  USERPAGE',
					rolesResponse.response,
				);

				setUsers(usersResponse.response);
				setRoles(rolesResponse.response);
			},
		);
	}, [requestServer, shouldUpdateUserList]);

	const onUserRemove = (userId) => {
		requestServer('removeUser', userId).then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	if (userRoleId === ROLES.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<div className={className}>
			<Content error={errorMessage}>
				<H2>Пользователи</H2>
				<UsersList>
					<TableRow>
						<div className="user-login-column">Login</div>
						<div className="user-registered-at-column">Дата регистрации</div>
						<div className="user-role-column">Роль</div>
					</TableRow>
					{users.map(({ id, login, registeredAt, roleId }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles.filter(({ id }) => id !== ROLES.GUEST)}
							onUserRemove={() => onUserRemove(id)}
						/>
					))}
				</UsersList>
			</Content>
		</div>
	);
};

export const UsersPage = styled(UsersPageContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	font-weight: 600;
	font-size: 18px;
	width: 570px;
`;
