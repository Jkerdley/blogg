import styled from 'styled-components';
import { SpecialPanel } from './SpecialPanel';
import { Button, Icon } from '../../../components';
import { useNavigate } from 'react-router-dom';

const PostContentcontainer = ({ className, post }) => {
	const navigate = useNavigate();

	const onDelete = () => {};
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
						onClick={onDelete}
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
