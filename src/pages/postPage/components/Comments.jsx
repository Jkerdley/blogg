import { useState } from 'react';
import styled from 'styled-components';
import { Comment } from './';
import { Button, Icon } from '../../../components';
import { useServerRequest } from '../../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../../../store/selectors';
import { addCommentAsync } from '../../../store/actions';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const onNewCommentAdd = (userId, postId, content) => {
		dispatch(addCommentAsync(requestServer, userId, postId, content));
		setNewComment('');
	};
	return (
		<div className={className}>
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

			<div className="comments">
				{comments.map((comment) => (
					<Comment
						key={comment.id}
						id={comment.id}
						author={comment.author_id}
						content={comment.content}
						createdAt={comment.published_at}
					/>
				))}
			</div>
		</div>
	);
};
export const Comments = styled(CommentsContainer)`
	align-items: center;
	justify-content: flex-start;
	width: 580px;
	height: auto;
	margin: 0 auto;
	border: solid 1px grey;

	& .new-comment-area {
		display: flex;
		width: 100%;
		margin: 0 0 20px 0;
	}
	& textarea {
		font-size: 18px;
		resize: none;
		width: 100%;
		min-height: 120px;
		height: auto;
	}
`;
