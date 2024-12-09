import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../Icon';

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
	margin-top: 5px;
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
	const navigate = useNavigate();
	return (
		<div className={className}>
			<RightAligned>
				<StyledLink to="/login">
					ВОЙТИ <Icon id="fa-forward" size="18px" margin="5px  5px  5px 5px" />
				</StyledLink>
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
