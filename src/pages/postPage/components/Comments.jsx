import { useState } from 'react';
import styled from 'styled-components';
import { Comment } from './';
import { Button, Icon } from '../../../components';
import { useServerRequest } from '../../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId, selectUserRole } from '../../../store/selectors';
import { addCommentAsync } from '../../../store/actions';
import { ROLES } from '../../../constants/roles';
import PropTypes from 'prop-types';
import { PROP_TYPE } from '../../../constants/prop-type';

const CommentsContainer = ({ className, comments, postId }) => {
	const userRole = useSelector(selectUserRole);
	const [newComment, setNewComment] = useState('');
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const onNewCommentAdd = (userId, postId, content) => {
		dispatch(addCommentAsync(requestServer, userId, postId, content));
		setNewComment('');
	};
	const isGuest = userRole === ROLES.GUEST;

	return (
		<div className={className}>
			{!isGuest && (
				<div className="new-comment-area">
					<textarea
						name="comment"
						value={newComment}
						placeholder="Комментарий..."
						onChange={({ target }) => {
							setNewComment(target.value);
						}}
					></textarea>
					<Button
						margin="0 0 0 2px"
						bgcolor="white"
						shadow="none"
						onClick={() => {
							onNewCommentAdd(userId, postId, newComment);
						}}
					>
						<Icon size="18px" id="fa-paper-plane-o" margin="0 8px 0 6px" />
					</Button>
				</div>
			)}

			<div className="comments">
				{comments.map(({ id, author, content, publishedAt, postId }) => (
					<Comment
						key={id}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
						postId={postId}
					/>
				))}
			</div>
		</div>
	);
};
export const Comments = styled(CommentsContainer)`
	width: 580px;
	height: auto;
	margin: 0 auto;

	& .new-comment-area {
		display: flex;
		width: 100%;
		margin: 0 0 14px 0;
	}
	& textarea {
		font-size: 18px;
		resize: none;
		width: 100%;
		min-height: 120px;
		height: auto;
	}
`;

Comments.propTypes = {
	comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
	postId: PropTypes.string.isRequired,
};
