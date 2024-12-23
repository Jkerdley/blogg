import styled from 'styled-components';
import { SpecialPanel } from './SpecialPanel';
import { Button, Icon } from '../../../components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useServerRequest } from '../../../hooks';
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../store/actions';

const PostContentcontainer = ({ className, post }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest();

	const onPostRemove = () => {
		dispatch(
			openModal({
				text: 'Удалить пост?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, post.id)).then(() =>
						navigate(`/`),
					);
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const onEdit = () => {
		navigate(`/post/${post.id}/edit`);
	};
	return (
		<div className={className}>
			<img src={post.imageUrl} alt={post.title} />
			<h2>{post.title}</h2>
			<SpecialPanel
				editButton={
					<Button
						bgcolor="white"
						shadow="none"
						margin="0 4px 0 0"
						padding="2px 0 0 6px"
						onClick={onEdit}
					>
						<Icon size="20px" id="fa-pencil-square-o" margin="1px 3px 0 0" />
					</Button>
				}
				deleteButton={
					<Button
						bgcolor="white"
						shadow="none"
						padding="1px 0 0 5px"
						onClick={onPostRemove}
					>
						<Icon size="21px" id="fa-trash-o" margin="1px 6px 0 0" />
					</Button>
				}
				publishedAt={post.publishedAt}
			/>
			<div className="post-text">{post.content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentcontainer)`
	padding: 40px 80px;
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}
	> h2 {
		margin-top: 0px;
	}
	& .post-text {
		font-size: 18px;
		white-space: pre-line;
	}
`;
