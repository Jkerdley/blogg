import styled from 'styled-components';
import { Icon } from '../../../components';

const PostContentcontainer = ({ className, post }) => {
	return (
		<div className={className}>
			<img src={post.imageUrl} alt={post.title} />
			<h2>{post.title}</h2>
			<div className="date-and-icon">
				<div className="published-at">
					<Icon size="18px" id="fa-calendar-o" margin="0 6px 0 0" />
					{post.publishedAt}
					<div className="buttons">
						<Icon size="18px" id="fa-pencil-square-o" margin="1px 6px 0 0" />
						<Icon size="18px" id="fa-trash-o" margin="0 0 0 4px" />
					</div>
				</div>
			</div>
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
	& .date-and-icon {
		display: block;
		margin-bottom: 0;
	}
	& .published-at {
		display: flex;
		align-items: center;
		margin-bottom: 19px;
	}
	& .buttons {
		display: flex;
		align-items: center;
		margin-left: 400px;
	}
	& .post-text {
		font-size: 18px;
	}
`;
