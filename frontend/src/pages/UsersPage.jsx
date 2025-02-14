import { useEffect, useState } from 'react';
import { H2 } from '../components/index.js';
import { UserRow, TableRow } from './components';
import { PrivateContent } from '../components';
import styled from 'styled-components';
import { ROLES } from '../constants/roles.js';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../store/selectors/select-user-role.js';
import { checkAccess } from '../utils/check-access.js';
import { request } from '../utils/request.js';

const UsersList = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: 400;
	width: 100%;
`;

const UsersPageContainer = ({ className }) => {
	const userRole = useSelector(selectUserRole);
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
	const userRoleId = useSelector(selectUserRole);

	useEffect(() => {
		if (!checkAccess([ROLES.ADMIN], userRole)) {
			return;
		}
		Promise.all([
			request('http://localhost:3004/users'),
			request('http://localhost:3004/users/roles'),
		]).then(([usersResponse, rolesResponse]) => {
			if (usersResponse.error || rolesResponse.error) {
				setErrorMessage(usersResponse.error || rolesResponse.error);
				return;
			}

			setUsers(usersResponse.data);
			setRoles(rolesResponse.data);
		});
	}, [shouldUpdateUserList, userRole]);

	const onUserRemove = (userId) => {
		if (!checkAccess([ROLES.ADMIN], userRole)) {
			return;
		}
		request(`http://localhost:3004/users/${userId}`, 'DELETE').then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	if (userRoleId === ROLES.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<PrivateContent access={[ROLES.ADMIN]} error={errorMessage}>
			<div className={className}>
				<H2>Пользователи</H2>
				<UsersList>
					<TableRow>
						<div className="user-login-column">Login</div>
						<div className="user-registered-at-column">Дата регистрации</div>
						<div className="user-role-column">Роль</div>
					</TableRow>
					{users.map(({ id, login, createdAt, roleId }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							createdAt={createdAt}
							roleId={roleId}
							roles={roles.filter(({ id }) => id !== ROLES.GUEST)}
							onUserRemove={() => onUserRemove(id)}
						/>
					))}
				</UsersList>
			</div>
		</PrivateContent>
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
