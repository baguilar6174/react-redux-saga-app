import { call, fork, put, take } from 'redux-saga/effects';
import types, {
	getAllEntriesSuccessRedux,
	populateEntryDetails,
} from '../actions/entries.action';
import axios from 'axios';

export function* getAllEntries() {
	yield take(types.GET_ENTRIES);
	const { data } = yield call(axios, 'http://localhost:3001/entries');
	/* yield put({ type: types.GET_ENTRIES_SUCCESS, payload: data }); */
	yield put(getAllEntriesSuccessRedux(data));
}

export function* getEntryDetail(id) {
	const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
	/* yield put({
		type: types.POPULATE_ENTRY_DETAILS,
		payload: { id, entry: data },
	}); */
	yield put(populateEntryDetails(id, data));
}

export function* getAllEntriesDetails() {
	const { payload } = yield take(types.GET_ENTRIES_SUCCESS);
	for (let index = 0; index < payload.length; index++) {
		const entry = payload[index];
		yield fork(getEntryDetail, entry.id);
	}
}
