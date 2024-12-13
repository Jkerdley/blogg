import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 120px;
	padding: 20px 40px;
	position: fixed;
	bottom: 0;
	width: 1000px;
	height: 120px;
	font-weight: 500;
	background-color: #ececec;
	box-shadow: 0px 2px 22px #777777;
`;

export const Footer = () => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWheather] = useState('');
	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Abakan&units=metric&lang=ru&appid=cab197bed1b1557afe080b921bc559a4',
		)
			.then((response) => response.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWheather(weather[0].description);
			});
	}, []);

	return (
		<FooterContainer>
			<div>
				<div>Блог веб-разработчика</div>
				<div>mail@developer.ru</div>
			</div>
			<div>
				<div>
					{city}{' '}
					{new Date().toLocaleDateString('ru', {
						day: 'numeric',
						month: 'long',
					})}
				</div>
				<div>
					{temperature} градусов, {weather}
				</div>
			</div>
		</FooterContainer>
	);
};
