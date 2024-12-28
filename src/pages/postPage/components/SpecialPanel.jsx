import styled from 'styled-components';
import { Icon } from '../../../components';
import { ROLES } from '../../../constants/roles';
import { checkAccess } from '../../../utils/check-access';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../../store/selectors';

const SpecialPanelContainer = ({ className, publishedAt, editButton, saveButton, deleteButton }) => {
	const roleId = useSelector(selectUserRole);
	const isAdminAccess = checkAccess([ROLES.ADMIN], roleId);
	return (
		<div className={className}>
			<div className="date-and-icon">
				<div className="published-at">
					{publishedAt && <Icon id="fa-calendar-o" size="16px" margin="0 4px 0 0" />}
					{publishedAt}
				</div>
				{isAdminAccess && (
					<div className="buttons">
						{editButton}
						{saveButton}
						{publishedAt && deleteButton}
					</div>
				)}
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: 10px 0;
	& .date-and-icon {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	& .published-at {
		display: flex;
		align-items: flex-start;
		width: 100%;
	}
	& .buttons {
		display: flex;
		align-items: flex-end;
		align-items: center;
	}
`;
