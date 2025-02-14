import styled from 'styled-components';
import { Button, Icon, Input } from '../../../components';
import { SpecialPanel } from './SpecialPanel';
import { useNavigate } from 'react-router-dom';
import { useLayoutEffect, useRef, useState } from 'react';
import { sanitizeContent } from './utils';
import { useDispatch } from 'react-redux';
import { CLOSE_MODAL, openModal, removePostAsync, savePostAsync } from '../../../store/actions';

const PostFormContainer = ({ className, post }) => {
	const [imageUrlValue, setImageUrlValue] = useState(post.imageUrl || '');
	const [titleValue, setTitleValue] = useState(post.title || '');
	const contentRef = useRef(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useLayoutEffect(() => {
		setImageUrlValue(post.imageUrl || '');
		setTitleValue(post.title || '');
	}, [post.imageUrl, post.title]);

	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);
		dispatch(
			savePostAsync(post.id, {
				title: titleValue,
				content: newContent,
				imageUrl: imageUrlValue,
			}),
		).then(({ id }) => navigate(`/post/${id}`));
	};

	const onPostRemove = () => {
		dispatch(
			openModal({
				question: 'Удалить пост?',
				onConfirm: () => {
					dispatch(removePostAsync(post.id)).then(() => navigate(`/`));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<Input
				value={titleValue}
				placeholder="Введите заголовок"
				onChange={({ target }) => setTitleValue(target.value)}
			/>
			<Input
				value={imageUrlValue}
				placeholder="Ссылка на изображение"
				onChange={({ target }) => setImageUrlValue(target.value)}
			/>

			<SpecialPanel
				saveButton={
					<Button
						bgcolor="white"
						shadow="none"
						margin="0 4px 0 0"
						padding="2px 0 0 6px"
						onClick={onSave}
					>
						<Icon size="20px" id="fa-floppy-o" margin="1px 6px 0 0" />
					</Button>
				}
				deleteButton={
					<Button bgcolor="white" shadow="none" padding="1px 0 0 5px" onClick={onPostRemove}>
						<Icon size="21px" id="fa-trash-o" margin="1px 6px 0 0" />
					</Button>
				}
				createdAt={post.createdAt}
			/>
			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="post-text"
			>
				{post.content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	display: flex;
	flex-direction: column;
	padding: 40px 80px;
	& .post-text {
		font-size: 18px;
		padding: 10px;
		white-space: pre-line;
		border: 1px solid grey;
		min-height: 160px;
	}
`;
