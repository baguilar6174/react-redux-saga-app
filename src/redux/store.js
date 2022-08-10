import { createStore, combineReducers, applyMiddleware } from 'redux';
import entriesReducer from './reducers/entries.reducer';
import modalsReducer from './reducers/modals.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { initSagas } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = () => {
	const store = createStore(
		combineReducers({
			entries: entriesReducer,
			modals: modalsReducer,
		}),
		composeWithDevTools(applyMiddleware(...middlewares))
	);
	initSagas(sagaMiddleware);
	return store;
};

export default store;
