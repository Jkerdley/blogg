import styled from 'styled-components';
import { Icon } from '../../../components';

const CommentContainer = ({ className, id, author, createdAt, content }) => {
	return (
		<div className={className}>
			<div className="information-panel">
				<div className="author">
					<Icon id="fa-user-circle-o" size="18px" margin="0 4px 0 8px" />
					Пользователь: {author}
				</div>
				<div className="published-at">
					<Icon id="fa-calendar-o" size="18px" margin="-0 4px 0 14px" />
					{createdAt}
				</div>
			</div>
			<div className="comment-text">{content}</div>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	font-size: 18px;
	& .information-panel {
		display: flex;
		justify-content: space-evenly;
		margin: 16px 0 0 0;
	}
	& .author {
		display: flex;
	}
	& .published-at {
		display: flex;
	}
`;
