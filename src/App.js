import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
	color: red;
	font-weight: bold;
`;
function App() {
	return (
		<>
			<div>
				<i className="fa fa-calendar"></i> Hello
			</div>
			<Div>123</Div>
		</>
	);
}

export default App;
