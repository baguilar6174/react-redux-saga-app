const types = {
	GET_ENTRIES: 'GET_ENTRIES',
	GET_ENTRIES_SUCCESS: 'GET_ENTRIES_SUCCESS',
	GET_ENTRIES_FAIL: 'GET_ENTRIES_FAIL',
	POPULATE_ENTRY_DETAILS: 'POPULATE_ENTRY_DETAILS',
	ADD_ENTRY: 'ADD_ENTRY',
	ADD_ENTRY_SUCCESS: 'ADD_ENTRY_SUCCESS',
	REMOVE_ENTRY: 'REMOVE_ENTRY',
	REMOVE_ENTRY_SUCCESS: 'REMOVE_ENTRY_SUCCESS',
	UPDATE_ENTRY: 'UPDATE_ENTRY',
};

export default types;

export const addEntryRedux = (payload) => {
	return {
		type: types.ADD_ENTRY,
		payload,
	};
};

export const removeEntryRedux = (id) => {
	return { type: types.REMOVE_ENTRY, payload: { id } };
};

export const updateEntryRedux = (id, entry) => {
	return { type: types.UPDATE_ENTRY, payload: { id, entry } };
};

export const getAllEntriesRedux = () => {
	return { type: types.GET_ENTRIES };
};

export const getAllEntriesSuccessRedux = (entries) => {
	return { type: types.GET_ENTRIES_SUCCESS, payload: entries };
};

export const populateEntryDetails = (id, entry) => {
	return { type: types.POPULATE_ENTRY_DETAILS, payload: { id, entry } };
};
