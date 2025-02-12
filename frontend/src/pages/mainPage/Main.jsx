import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { PostCard } from './PostCard';
import { Pagination } from './Pagination';
import { PAGINATION_LIMIT } from '../../constants/limits';
import { debounce } from './utils';
import { Search } from './Search';
import { request } from '../../utils/request';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);

	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');

	const startDebouncedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDebouncedSearch(!shouldSearch);
	};

	useEffect(() => {
		request(
			`http://localhost:3004/posts?search=${searchPhrase}&page=${currentPage}&limit=${PAGINATION_LIMIT}`,
		)
			.then(({ data: { posts, lastPage } }) => {
				setPosts(posts);
				setLastPage(lastPage);
			})
			.catch((error) => {
				console.error('Error fetching posts:', error);
			});
	}, [searchPhrase, currentPage, shouldSearch]);

	return (
		<div className={className}>
			<div className="search-input">
				<Search searchPhrase={searchPhrase} onChange={onSearch} />

				{posts.length > 0 ? (
					<div className="post-list">
						{posts.map(({ id, title, createdAt, comments, imageUrl }) => (
							<PostCard
								key={id}
								id={id}
								title={title}
								createdAt={createdAt}
								commentsCount={comments.length}
								imageUrl={imageUrl}
							/>
						))}
					</div>
				) : (
					<div className="noposts-error-message">Ничего не найдено...</div>
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
		margin-top: 40px;
	}
	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px 20px 80px;
	}
`;
