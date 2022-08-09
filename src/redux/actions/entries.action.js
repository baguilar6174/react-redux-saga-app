export const addEntryRedux = () => {
	return {
		type: 'ADD_ENTRY',
		payload: {
			id: 10,
			description: 'Hello fromn redux',
			value: 15,
			isExpense: false,
		},
	};
};

export const removeEntryRedux = (id) => {
	return { type: 'REMOVE_ENTRY', payload: { id } };
};
