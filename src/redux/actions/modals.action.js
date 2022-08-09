export const openEditModal = (id) => {
	return { type: 'OPEN_MODAL', payload: { id } };
};

export const closeEditModal = () => {
	return { type: 'CLOSE_MODAL' };
};
