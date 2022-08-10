import { delay, put, take } from 'redux-saga/effects';

export function* testSaga() {
	while (true) {
		console.log('Starting saga');
		yield take('TEST_MESSAGE');
		console.log('Finish saga function');
	}
}

export function* dispatchTest() {
	while (true) {
		yield delay(1000);
		yield put({ type: 'TEST_MESSAGE' });
	}
}
