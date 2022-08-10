import { call, put, take } from 'redux-saga/effects';
import types from '../actions/entries.action';
import axios from 'axios';

export function* deleteEntrySaga() {
	while (true) {
		const { payload } = yield take(types.REMOVE_ENTRY);
		yield call(deleteEntry, payload.id);
		yield put({
			type: types.REMOVE_ENTRY_SUCCESS,
			payload: { id: payload.id },
		});
	}
}

async function deleteEntry(id) {
	await axios.delete(`http://localhost:3001/entries/${id}`);
	await axios.delete(`http://localhost:3001/values/${id}`);
}
