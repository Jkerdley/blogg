import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon, Input } from '../../components';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<>
			<div className={className}>
				<Input
					value={searchPhrase}
					onChange={onChange}
					placeholder="Поиск по заголовкам..."
					padding="10px 32px 10px 10px"
					width="340px"
				/>
				<Icon id="fa-search" size="18px" />
			</div>
		</>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	justify-content: center;
	width: 340px;
	height: 40px;
	margin: 40px auto 0;
	position: relative;
	& > div {
		position: absolute;
		right: 10px;
		top: 7px;
	}
`;

Search.propTypes = {
	searchPhrase: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
