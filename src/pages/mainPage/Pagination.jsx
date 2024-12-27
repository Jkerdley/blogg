import styled from 'styled-components';
import { Button } from '../../components';

const PaginationContainer = ({ className, setCurrentPage, prevPage, lastPage }) => {
	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};
	const handlePrevPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	return (
		<div className={className}>
			<Button
				disabled={prevPage === 1}
				margin="0 20px 0 0"
				padding="0 20px 0 20px"
				onClick={() => setCurrentPage(1)}
			>
				в начало
			</Button>
			<Button
				disabled={prevPage === 1}
				margin="0 20px 0 0"
				padding="0 20px 0 20px"
				onClick={handlePrevPage}
			>
				предыдущая
			</Button>
			<div className="current-page">Страница: {prevPage}</div>
			<Button
				disabled={prevPage === lastPage}
				margin="0 20px 0 20px"
				padding="0 20px 0 20px"
				onClick={handleNextPage}
			>
				следующая
			</Button>
			<Button
				disabled={prevPage === lastPage}
				margin="0 20px 0 0"
				padding="0 20px 0 20px"
				onClick={() => setCurrentPage(lastPage)}
			>
				в конец
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 0 20px;
	& .current-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		border: 1px solid grey;
		border-radius: 10px;
		text-align: center;
		line-height: 24px;
		width: 130px;
		height: 34px;
		padding: 10px;
	}
`;
