import { call, fork, put, take } from 'redux-saga/effects';
import types, {
	getAllEntriesSuccessRedux,
	populateEntryDetails,
} from '../actions/entries.action';
import axios from 'axios';

export function* getAllEntries() {
	yield take(types.GET_ENTRIES);
	console.log('I need to get the entries now');
	const { data } = yield call(axios, 'http://localhost:3001/entries');
	yield put(getAllEntriesSuccessRedux(data));
}

export function* getEntryDetails(id) {
	const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
	yield put(populateEntryDetails(id, data));
}
export function* getAllEntriesDetails() {
	const { payload } = yield take(types.GET_ENTRIES_SUCCESS);
	for (let index = 0; index < payload.length; index++) {
		const entry = payload[index];
		yield fork(getEntryDetails, entry.id);
	}
}
