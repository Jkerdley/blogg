import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { PostCard } from './PostCard';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts').then((posts) => {
			setPosts(posts.response);
		});
	}, [requestServer]);

	return (
		<div className={className}>
			<div className="search-input"></div>
			<div className="post-list">
				{posts.map(({ id, title, publishedAt, commentsCount, imageUrl }) => (
					<PostCard
						key={id}
						id={id}
						title={title}
						publishedAt={publishedAt}
						commentsCount={commentsCount}
						imageUrl={imageUrl}
					/>
				))}
			</div>
			<div className="pagination"></div>
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	align-items: flex-start;
	& .post-list {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		padding: 20px;
	}
`;
