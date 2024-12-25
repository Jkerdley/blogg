import styled from 'styled-components';
import { Button } from '../../components';

const PaginationContainer = ({ className, setPage, page }) => {
	return (
		<div className={className}>
			<Button
				disabled={page === 1}
				margin="0 20px 0 0"
				padding="0 20px 0 20px"
				onClick={() => setPage(1)}
			>
				в начало
			</Button>
			<Button
				disabled={page === 1}
				margin="0 20px 0 0"
				padding="0 20px 0 20px"
				onClick={() => setPage(page - 1)}
			>
				предыдущая
			</Button>
			<div className="current-page">Страница: {page}</div>
			<Button margin="0 20px 0 20px" padding="0 20px 0 20px" onClick={() => setPage(page + 1)}>
				следующая
			</Button>
			<Button margin="0 20px 0 0" padding="0 20px 0 20px" onClick={() => setPage(1)}>
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
