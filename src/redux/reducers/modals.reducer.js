const reducer = (state = { isOpen: false }, action) => {
	switch (action.type) {
		case 'OPEN_MODAL':
			return { ...state, isOpen: true, id: action.payload.id };
		case 'CLOSE_MODAL':
			return { ...state, isOpen: false, id: null };
		default:
			return state;
	}
};

export default reducer;
