import * as entriesSaga from './entries.saga';
import * as entriesDeletionSaga from './entriesDeletion.saga';
import * as entriesAddSaga from './entriesAdd.saga';

export function initSagas(sagaMiddleware) {
	Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
	Object.values(entriesDeletionSaga).forEach(
		sagaMiddleware.run.bind(sagaMiddleware)
	);
	Object.values(entriesAddSaga).forEach(
		sagaMiddleware.run.bind(sagaMiddleware)
	);
}
