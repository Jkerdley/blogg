import styled from 'styled-components';
import { Button, Icon } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL, removeCommentAsync, openModal } from '../../../store/actions';
import { useServerRequest } from '../../../hooks';
import { ROLES } from '../../../constants/roles';
import { selectUserRole } from '../../../store/selectors';
import PropTypes from 'prop-types';

const CommentContainer = ({ className, id, author, publishedAt, content, postId }) => {
	const userRole = useSelector(selectUserRole);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				question: 'Удалить комментарий',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};
	const isAdminOrModerator = [ROLES.ADMIN, ROLES.MODERATOR].includes(userRole);
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

			{isAdminOrModerator && (
				<Button
					className="delete-comment"
					bgcolor="white"
					shadow="none"
					onClick={() => onCommentRemove(id)}
				>
					<Icon id="fa-trash-o" size="20px" />
				</Button>
			)}
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

Comment.propTypes = {
	id: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	postId: PropTypes.string.isRequired,
};
