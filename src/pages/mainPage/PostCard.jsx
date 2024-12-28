import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '../../components';
import { Link } from 'react-router-dom';

const PostCardContainer = ({ className, id, title, imageUrl, publishedAt, commentsCount }) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="date-and-comments">
						<div className="published-at">
							<Icon id="fa-calendar-o" size="16px" margin="0 5px 0 0" />
							{publishedAt}
						</div>
						<div className="comments">
							<Icon id="fa-comment-o" size="16px" margin="0 5px 0 0" />
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	margin: 20px;
	width: 280px;
	border: 1px solid grey;
	& .date-and-comments {
		display: flex;
		justify-content: space-between;
		margin: 5px 0 0;
		align-items: center;
	}
	& .published-at {
		display: flex;
		align-items: flex-end;
	}
	& .comments {
		display: flex;
		align-items: flex-start;
	}
	& .post-card-footer {
		border-top: solid 1px grey;
		padding: 5px;
	}
	& h4 {
		margin: 0;
	}
	& img {
		display: block;
		width: 100%;
	}
`;

PostCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	commentsCount: PropTypes.number.isRequired,
};
