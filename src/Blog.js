import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { StyledHeader, Footer, Page, Modal } from './components';
import { Authorisation, Main, Post, Registration, UsersPage } from './pages/index.js';
import { useLayoutEffect } from 'react';
import { setUser } from './store/actions';
import { useDispatch } from 'react-redux';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;

function Blog() {
	const dispatch = useDispatch();
	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');
		if (!currentUserDataJSON) {
			return;
		}
		const currentUserData = JSON.parse(currentUserDataJSON);
		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);
	return (
		<AppColumn>
			<StyledHeader />

			<Page>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Authorisation />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/authError" element={<div>authError</div>} />
					<Route path="/users" element={<UsersPage />} />
					<Route path="/posts" element={<div>Posts</div>} />
					<Route path="/post" element={<Post />} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/post/:id/edit" element={<Post />} />
					<Route path="/*" element={<div>404</div>} />
				</Routes>
			</Page>
			<Footer />
			<Modal />
		</AppColumn>
	);
}
export default Blog;
