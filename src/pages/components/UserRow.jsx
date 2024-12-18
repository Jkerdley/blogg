import styled from 'styled-components';
import { Button, Icon } from '../../components';
import { TableRow } from './TableRow';
import { useState } from 'react';
import { useServerRequest } from '../../hooks';

const RoleAndButtonContainer = styled.div`
	display: flex;
	align-items: center;
	& > select {
		cursor: pointer;
		background-color: #f0f0f0;
		height: 22px;
		font-size: 16px;
		border-radius: 5px;
		padding: 0 4px;
	}
	& .save-role-none {
		height: 20px;
		width: 20px;
		color: green;
	}
`;

const UserRowContainer = ({
	className,
	id,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
	onUserRemove,
}) => {
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
	const [initialRoleId, setInitialRoleId] = useState(userRoleId);

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};

	const requestServer = useServerRequest();

	const onUserRoleSave = (userId, userNewRoleId) => {
		requestServer('updateUserRole', userId, userNewRoleId).then(() => {
			setInitialRoleId(userNewRoleId);
		});
	};

	const isSaveButtonDisabled = selectedRoleId === initialRoleId;

	return (
		<div className={className}>
			<TableRow border>
				<div className="user-login-column">{login}</div>
				<div className="user-registered-at-column">{registeredAt}</div>
				<div className="user-role-column">
					<RoleAndButtonContainer>
						<select value={selectedRoleId} onChange={onRoleChange}>
							{roles.map(({ id: roleId, name: roleName }) => (
								<option value={roleId}>{roleName}</option>
							))}
						</select>
						<Button
							shadow="0"
							bgcolor="white"
							padding="2px 6px 0 6px"
							margin="0 0 0 2px"
							disabled={isSaveButtonDisabled}
							onClick={() => onUserRoleSave(id, selectedRoleId)}
						>
							<Icon id="fa-floppy-o" />
						</Button>
					</RoleAndButtonContainer>
				</div>
			</TableRow>
			<div className="delete-user-data">
				<Button
					margin="0 0 0 2px"
					shadow="0"
					bgcolor="white"
					padding="0 6px 0 6px"
					onClick={onUserRemove}
				>
					<Icon id="fa-trash" />
				</Button>
			</div>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)`
	display: flex;
	margin-top: 12px;
`;
