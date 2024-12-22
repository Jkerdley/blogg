import styled from 'styled-components';
import { Button, Icon } from '../../../components';

const CommentContainer = ({ className, author, publishedAt, content }) => {
	return (
		<div className={className}>
			<div className="comment-container">
				<div className="information-panel">
					<div className="author">
						<Icon id="fa-user-circle-o" size="16px" margin="0 6px 0 0" />
						Пользователь: {author}
					</div>
					<div className="published-at">
						<Icon id="fa-calendar-o" size="16px" margin="-0 4px 0 14px" />
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Button className="delete-comment" bgcolor="white" shadow="none">
				<Icon id="fa-trash-o" size="20px" />
			</Button>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	align-items: center;

	justify-content: space-between;
	font-size: 18px;
	margin: 12px 0 0 0;
	& .comment-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		padding: 6px;
		width: 100%;
		border: solid 1px grey;
	}
	& .information-panel {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	& .author {
		display: flex;
	}
	& .published-at {
		display: flex;
	}
	& .delete-comment {
		height: 34px;
		width: 34px;
		margin: 0 0 0 2px;
	}
	& .comment-text {
		margin-top: 6px;
	}
`;
