const reducer = (state = initialEntries, action) => {
	let newEntries;
	switch (action.type) {
		case 'ADD_ENTRY':
			newEntries = state.concat({ ...action.payload });
			return newEntries;
		case 'REMOVE_ENTRY':
			newEntries = state.filter((entry) => entry.id !== action.payload.id);
			return newEntries;
		case 'UPDATE_ENTRY':
			newEntries = [...state];
			// eslint-disable-next-line no-case-declarations
			const index = newEntries.findIndex(
				(entry) => entry.id === action.payload.id
			);
			newEntries[index] = { ...action.payload.entry };
			return newEntries;
		default:
			return state;
	}
};

const initialEntries = [
	{
		id: '1',
		description: 'Description 1',
		value: 500,
		isExpense: false,
	},
	{
		id: '2',
		description: 'Description 32',
		value: 5400,
		isExpense: true,
	},
];

export default reducer;