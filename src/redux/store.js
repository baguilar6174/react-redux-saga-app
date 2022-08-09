import { createStore, combineReducers } from 'redux';
import entriesReducer from './reducers/entries.reducer';

const store = () => {
	return createStore(
		combineReducers({
			entries: entriesReducer,
		})
	);
};

export default store;
