import {combineReducers} from '@reduxjs/toolkit';
import getFlightsDataReducer, {GetFlightsDataState} from './getFlightsData';

export interface RootState {
  getFlightsDataReducer: GetFlightsDataState;
  // Add other reducers and their state types as needed
}

const rootReducer = combineReducers({
  getFlightsDataReducer,
  // Add other reducers here
});

export default rootReducer;
