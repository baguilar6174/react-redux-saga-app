import { createStore, combineReducers } from 'redux';
import entriesReducer from './reducers/entries.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = () => {
	return createStore(
		combineReducers({
			entries: entriesReducer,
		}),
		composeWithDevTools()
	);
};

export default store;
