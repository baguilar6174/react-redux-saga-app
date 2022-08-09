import { createStore, combineReducers } from 'redux';
import entriesReducer from './reducers/entries.reducer';
import modalsReducer from './reducers/modals.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = () => {
	return createStore(
		combineReducers({
			entries: entriesReducer,
			modals: modalsReducer,
		}),
		composeWithDevTools()
	);
};

export default store;
