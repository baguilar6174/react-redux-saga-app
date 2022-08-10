import types from '../actions/modals.action';

const reducer = (state = { isOpen: false }, action) => {
	switch (action.type) {
		case types.OPEN_MODAL:
			return { ...state, isOpen: true, id: action.payload.id };
		case types.CLOSE_MODAL:
			return { ...state, isOpen: false, id: null };
		default:
			return state;
	}
};

export default reducer;
