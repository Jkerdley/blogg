import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { CLOSE_MODAL, openModal } from '../../../store/actions';
import { useServerRequest } from '../../../hooks';
import { Icon } from '../../../components';

const SpecialPanelContainer = ({
	className,
	publishedAt,
	editButton,
	saveButton,
	deleteButton,
}) => {
	return (
		<div className={className}>
			<div className="date-and-icon">
				<div className="published-at">
					<Icon id="fa-calendar-o" size="16px" margin="0 4px 0 0" />
					{publishedAt}
				</div>
				<div className="buttons">
					{editButton}
					{saveButton}
					{deleteButton}
				</div>
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
