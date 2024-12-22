import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { server } from '../bff';
import { useState } from 'react';
import styled from 'styled-components';
import { Button, H2, Input } from '../components/index.js';
import { setUser } from '../store/actions/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../store/selectors/select-user-role.js';
import { ROLES } from '../constants/roles.js';
import { useAuthFormReset } from '../hooks';

const StyledLink = styled(Link)`
	margin-top: 16px;
	font-size: 16px;
	font-weight: 500;
	text-align: center;
	text-decoration: underline;
	color: black;
	&:hover {
		font-size: 17px;
		transition: font-size 0.15s ease;
	}
`;

const ErrorMessage = styled.div`
	display: flex;
	background-color: #ee688a;
	height: auto;
	font-size: 16px;
	align-items: center;
	padding: 10px;
	margin-top: 10px;
	border-radius: 5px;
`;

const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверно заполнен логин. Допустимы только буквы и цифры')
		.min(3, 'Неверно заполнен логин. Минимум 3 символа')
		.max(15, 'Неверно заполнен логин, максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль. Допустимы буквы, цифры и знаки # %',
		)
		.min(6, 'Неверно заполнен пароль. Минимум 6 символов')
		.max(20, 'Неверно заполнен пароль. Максимум 20 символов'),
});

const AuthorisationContainer = ({ className }) => {
	const [serverError, setServerError] = useState(null);
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});

	useAuthFormReset(reset);

	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, response }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}
			dispatch(setUser(response));
			sessionStorage.setItem('userData', JSON.stringify(response));
		});
	};

	const formError = errors?.login?.message || errors?.password?.message;
	const errorMessage = formError || serverError;

	if (roleId !== ROLES.GUEST) {
		return <Navigate to="/" />;
	}
	return (
		<div className={className}>
			<H2>АВТОРИЗАЦИЯ</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="Логин"
					{...register('login', {
						onChange: () => {
							setServerError(null);
						},
					})}
				/>
				<Input
					type="password"
					placeholder="Пароль"
					{...register('password', {
						onChange: () => {
							setServerError(null);
						},
					})}
				/>
				<Button disabled={!!formError}>Авторизоваться</Button>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
				<StyledLink to="/register"> Регистрация </StyledLink>
			</form>
		</div>
	);
};

export const Authorisation = styled(AuthorisationContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	& > form {
		display: flex;
		flex-direction: column;
		width: 260px;
	}
`;
