const types = {
	OPEN_MODAL: 'OPEN_MODAL',
	CLOSE_MODAL: 'CLOSE_MODAL',
};

export default types;

export const openEditModal = (id) => {
	return { type: types.OPEN_MODAL, payload: { id } };
};

export const closeEditModal = () => {
	return { type: types.CLOSE_MODAL };
};
