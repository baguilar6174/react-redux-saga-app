import types from '../actions/entries.action';

const reducer = (state = initialEntries, action) => {
	let newEntries;
	switch (action.type) {
		case types.GET_ENTRIES_SUCCESS:
			return action.payload;
		case types.ADD_ENTRY:
			newEntries = state.concat({ ...action.payload });
			return newEntries;
		case types.REMOVE_ENTRY:
			newEntries = state.filter((entry) => entry.id !== action.payload.id);
			return newEntries;
		case types.POPULATE_ENTRY_DETAILS:
		case types.UPDATE_ENTRY:
			newEntries = [...state];
			// eslint-disable-next-line no-case-declarations
			const index = newEntries.findIndex(
				(entry) => entry.id === action.payload.id
			);
			newEntries[index] = { ...newEntries[index], ...action.payload.entry };
			return newEntries;
		default:
			return state;
	}
};

const initialEntries = [];

export default reducer;
