import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../Icon';

const LogoBlog = styled.div`
	margin-top: 20px;
	font-size: 48px;
	font-weight: 600;
	line-height: 54px;
`;
const SmallLogoText = styled.div`
	font-size: 16px;
	font-weight: bold;
`;

const LogoContainer = ({ className }) => (
	<Link className={className} to="/">
		<Icon size="80px" margin="0 16px 0 40px" id="fa-code" />
		<div>
			<LogoBlog>БЛОГ</LogoBlog>
			<SmallLogoText>веб-разработчика</SmallLogoText>
		</div>
	</Link>
);

export const LogoStyled = styled(LogoContainer)`
	display: flex;
`;
