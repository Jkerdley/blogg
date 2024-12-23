import styled from 'styled-components';
import { Button, Icon, Input } from '../../../components';
import { SpecialPanel } from './SpecialPanel';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { sanitizeContent } from './utils';
import { useDispatch } from 'react-redux';
import { savePostAsync } from '../../../store/actions';
import { useServerRequest } from '../../../hooks';

const PostFormContainer = ({ className, post }) => {
	const titleRef = useRef(null);
	const imgRef = useRef(null);
	const contentRef = useRef(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest();

	const onSave = () => {
		const newImgUrl = imgRef.current.value;
		const newTitle = titleRef.current.value;
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			savePostAsync(requestServer, {
				id: post.id,
				imageUrl: newImgUrl,
				title: newTitle,
				content: newContent,
			}),
		).then(() => navigate(`/post/${post.id}`));
	};

	const onDelete = () => {};

	return (
		<div className={className}>
			<Input
				ref={titleRef}
				width="100%"
				defaultValue={post.title}
				placeholder="Заголовок"
			/>
			<Input
				ref={imgRef}
				defaultValue={post.imageUrl}
				placeholder="Ссылка на изображение"
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
					<Button
						bgcolor="white"
						shadow="none"
						padding="1px 0 0 5px"
						onClick={onSave}
					>
						<Icon size="21px" id="fa-trash-o" margin="1px 6px 0 0" />
					</Button>
				}
				publishedAt={post.publishedAt}
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
		white-space: pre-line;
	}
`;
