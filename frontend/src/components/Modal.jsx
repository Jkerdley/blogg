import styled from 'styled-components';
import { Button } from './Button';
import { useSelector } from 'react-redux';
import {
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalisOpen,
	selectModalText,
} from '../store/selectors';

const ModalWindowContainer = ({ className }) => {
	const question = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);
	const isOpen = useSelector(selectModalisOpen);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="modal-box">
				<h3>{question}</h3>
				<div className="buttons">
					<Button width="120px" margin="20px 0" shadow="none" onClick={onConfirm}>
						Да
					</Button>
					<Button width="120px" shadow="none" margin="20px 0" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalWindowContainer)`
	position: fixed;
	z-index: 20;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;

	& .overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.6);
	}
	& .modal-box {
		text-align: center;
		position: relative;
		width: 360px;
		height: 140px;
		margin: auto;
		padding: 2px 0 0 14px;
		z-index: 30;
		top: 50%;
		transform: translate(0, -50%);
		background-color: white;
		border-radius: 10px;
	}
	& .buttons {
		display: flex;
		justify-content: space-evenly;
	}
`;
