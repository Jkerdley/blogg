import { useState } from 'react';
import styled from 'styled-components';
import { Comment } from './';
import { Button, Icon } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../../../store/selectors';
import { addCommentAsync } from '../../../store/actions';
import { ROLES } from '../../../constants/roles';
import PropTypes from 'prop-types';
import { PROP_TYPE } from '../../../constants/prop-type';

const CommentsContainer = ({ className, comments, postId }) => {
	const userRole = useSelector(selectUserRole);
	const [newComment, setNewComment] = useState('');
	const dispatch = useDispatch();

	const arrayIsEmpty = Array.isArray(comments) ? comments : [];

	if (!postId) {
		return (
			<div className={className}>
				<p>Невозможно загрузить комментарии, отсутствует идентификатор поста.</p>
			</div>
		);
	}

	const onNewCommentAdd = (postId, content) => {
		dispatch(addCommentAsync(postId, content));
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
							onNewCommentAdd(postId, newComment);
						}}
					>
						<Icon size="18px" id="fa-paper-plane-o" margin="0 8px 0 6px" />
					</Button>
				</div>
			)}

			<div className="comments">
				{arrayIsEmpty.length === 0 ? (
					<p>Комментариев нет.</p>
				) : (
					arrayIsEmpty.map(({ id, author, content, createdAt }) => (
						<Comment
							key={id}
							id={id}
							author={author}
							content={content}
							createdAt={createdAt}
							postId={postId}
						/>
					))
				)}
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
	comments: PropTypes.arrayOf(PROP_TYPE.COMMENT),
};
