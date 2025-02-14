import styled from 'styled-components';
import { ControlPanel, LogoStyled } from './header/components';

const Description = styled.div`
	font-size: 18px;
	font-style: italic;
	text-align: center;
	font-weight: 400;
	margin-top: 20px;
`;

const Header = ({ className }) => {
	return (
		<>
			<header className={className}>
				<LogoStyled />
				<Description>
					Веб-технологии <br /> Написание кода <br /> Разбор ошибок
				</Description>
				<ControlPanel />
			</header>
		</>
	);
};

export const StyledHeader = styled(Header)`
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	width: 1000px;
	height: 120px;
	background-color: #ececec;
	box-shadow: 0px -2px 22px #777777;
`;
