import { call, put, takeLatest } from 'redux-saga/effects';
import types from '../actions/entries.action';
import axios from 'axios';

export function* addEntrySaga() {
	yield takeLatest(types.ADD_ENTRY, addEntryToDB);
}

function* addEntryToDB({ payload }) {
	yield call(addEntry, payload);
	yield call(addEntryDetails, payload);
	yield put({ type: types.ADD_ENTRY_SUCCESS, payload });
}

async function addEntry({ id, description }) {
	await axios.post(`http://localhost:3001/entries`, { id, description });
}

async function addEntryDetails({ id, isExpense, value }) {
	await axios.post(`http://localhost:3001/values`, { id, isExpense, value });
}
