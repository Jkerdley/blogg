import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { StyledHeader, Footer, Content } from './components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;

const H1 = styled.h1`
	text-align: center;
	padding-bottom: 100px;
	color: #c10bf8;
	font-weight: bold;
`;

function Blog() {
	return (
		<AppColumn>
			<StyledHeader />
			<Content>
				<H1>Child</H1>
				<Routes>
					<Route path="/" element={<div>Main page</div>} />
					<Route path="/login" element={<div>Login</div>} />
					<Route path="/register" element={<div>Register</div>} />
					<Route path="/authError" element={<div>authError</div>} />
					<Route path="/*" element={<div>404</div>} />
					<Route path="/users" element={<div>Users</div>} />
					<Route path="/posts/:postId" element={<div>Post</div>} />
					<Route path="/post" element={<div>New Post</div>} />
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
}
export default Blog;
