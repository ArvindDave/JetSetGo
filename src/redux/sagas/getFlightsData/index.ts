import {call, put, takeEvery} from 'redux-saga/effects';
import {
  API_RESPONSE_SUCCESS,
  ERROR_MESSAGE,
  GET_FLIGHTS_DETAILS,
} from '../../../utils/constants';
import customFetch from '../../../utils/helper/apiHelper/apiHelper';
import {
  getFlightsDataFailure,
  getFlightsDataRequest,
  getFlightsDataSuccess,
} from '../../reducers/getFlightsData';

interface ResponseData {
  status?: string;
  data?: {
    message?: string;
    data?: any;
  };
}

export function fetchGetFlightsData() {
  const config = {
    url: GET_FLIGHTS_DETAILS,
  };
  return customFetch(config?.url);
}

export function* handleGetImgVideos() {
  try {
    const response: ResponseData = yield call(fetchGetFlightsData);
    const {status, data} = response || {};
    const errorMsg = data?.message ? data?.message : ERROR_MESSAGE;
    if (status?.toString() === API_RESPONSE_SUCCESS?.toString()) {
      yield put(getFlightsDataSuccess(response?.data?.data));
    } else {
      yield put(getFlightsDataFailure(errorMsg));
    }
  } catch (error) {
    yield put(getFlightsDataFailure(ERROR_MESSAGE));
  }
}

// Our watcher Saga
export function* watchFlightsData() {
  yield takeEvery(getFlightsDataRequest, handleGetImgVideos);
}
