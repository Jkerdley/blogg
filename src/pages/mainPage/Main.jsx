import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { PostCard } from './PostCard';
import { Pagination } from './Pagination';
import { PAGINATION_LIMIT } from '../../constants/limits';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then((posts) => {
			setPosts(posts.response);
		});
	}, [requestServer, page]);

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
			<Pagination setPage={setPage} page={page} />
		</div>
	);
};

export const Main = styled(MainContainer)`
	margin-bottom: 140px;
	& .post-list {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		padding: 20px;
	}
`;
