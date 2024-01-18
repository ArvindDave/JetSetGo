import {all} from 'redux-saga/effects';
import {watchFlightsData} from './getFlightsData';

// single entry point to start all Sagas at once
export default function* rootSaga(): Generator {
  yield all([watchFlightsData()]);
}
