import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { PostCard } from './PostCard';
import { Pagination } from './Pagination';
import { PAGINATION_LIMIT } from '../../constants/limits';
import { getLastPageFromLinks } from './utils';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', currentPage, PAGINATION_LIMIT)
			.then(({ response: { posts, links } }) => {
				setPosts(posts);
				const lastLinkPage = getLastPageFromLinks(links);
				setLastPage(lastLinkPage);
			})
			.catch((error) => {
				console.error('Error fetching posts:', error);
			});
	}, [requestServer, currentPage]);

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
			</div>{' '}
			{lastPage > 1 && (
				<Pagination setCurrentPage={setCurrentPage} prevPage={currentPage} lastPage={lastPage} />
			)}
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
