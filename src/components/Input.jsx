import { forwardRef } from 'react';
import styled from 'styled-components';

const InputContainer = forwardRef(({ className, ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
	height: 40px;
	font-size: 18px;
	margin-bottom: 10px;
	min-width: ${(width = '100%') => width};
	padding: 10px;
	border-radius: 10px;
	border: 1px solid grey;
`;
