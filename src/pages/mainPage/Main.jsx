import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { PostCard } from './PostCard';
import { Pagination } from './Pagination';
import { PAGINATION_LIMIT } from '../../constants/limits';
import { debounce, getLastPageFromLinks } from './utils';
import { Search } from './Search';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const requestServer = useServerRequest();
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');

	const startDebouncedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDebouncedSearch(!shouldSearch);
	};

	useEffect(() => {
		requestServer('fetchPosts', searchPhrase, currentPage, PAGINATION_LIMIT)
			.then(({ response: { posts, links } }) => {
				setPosts(posts);
				const lastLinkPage = getLastPageFromLinks(links);
				setLastPage(lastLinkPage);
			})
			.catch((error) => {
				console.error('Error fetching posts:', error);
			});
	}, [requestServer, currentPage, shouldSearch]);

	return (
		<div className={className}>
			<div className="search-input">
				<Search searchPhrase={searchPhrase} onChange={onSearch} />

				{posts.length > 0 ? (
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
				) : (
					<div className="noposts-error-message">...</div>
				)}
			</div>
			{lastPage > 1 && posts.length > 0 && (
				<Pagination
					className="pagination"
					setCurrentPage={setCurrentPage}
					prevPage={currentPage}
					lastPage={lastPage}
				/>
			)}
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 140px;

	& .noposts-error-message {
		text-align: center;
		font-size: 18px;
		color: red;
		margin-top: 20px;
	}
	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px 20px 80px;
	}
`;
