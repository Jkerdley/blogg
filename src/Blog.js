import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { StyledHeader, Footer, Page } from './components';
import { Authorisation, Registration, UsersPage } from './pages/index.js';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;

function Blog() {
	return (
		<AppColumn>
			<StyledHeader />
			<Page>
				<Routes>
					<Route path="/" element={<div>Main page</div>} />
					<Route path="/login" element={<Authorisation />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/authError" element={<div>authError</div>} />
					<Route path="/*" element={<div>404</div>} />
					<Route path="/users" element={<UsersPage />} />
					<Route path="/posts/:postId" element={<div>Post</div>} />
					<Route path="/post" element={<div>New Post</div>} />
				</Routes>
			</Page>
			<Footer />
		</AppColumn>
	);
}
export default Blog;
