import { ACTION_TYPE } from './actionTypes';

export const openModal = (modalParams) => ({
	type: ACTION_TYPE.OPEN_MODAL,
	payload: modalParams,
});
