import styled from 'styled-components';

const NewPostContainer = ({ className }) => {
	return <div className={className}>POST</div>;
};

export const NewPost = styled(NewPostContainer)`
	display: flex;
	background-color: red;
`;
