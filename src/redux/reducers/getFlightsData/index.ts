import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface GetFlightsDataState {
  isLoading: boolean;
  isGetFlightsDataSuccess?: boolean;
  isGetFlightsDataFailure?: boolean;
  errorMsg?: string | null;
  getFlightsData?: any; // Replace 'any' with the actual type of your getFlightsData property
}

const initialState: GetFlightsDataState = {
  isLoading: false,
};

export const getFlightsDataSlice = createSlice({
  name: 'getFlightsDataReducer',
  initialState,
  reducers: {
    getFlightsDataRequest: state => {
      state.isLoading = true;
      state.isGetFlightsDataSuccess = false;
      state.isGetFlightsDataFailure = false;
      state.errorMsg = null;
    },
    getFlightsDataSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isGetFlightsDataSuccess = true;
      state.isGetFlightsDataFailure = false;
      state.errorMsg = null;
      state.getFlightsData = action.payload;
    },
    getFlightsDataFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isGetFlightsDataSuccess = false;
      state.isGetFlightsDataFailure = true;
      state.errorMsg = action.payload;
    },
  },
});

export const {
  getFlightsDataRequest,
  getFlightsDataSuccess,
  getFlightsDataFailure,
} = getFlightsDataSlice.actions;

export default getFlightsDataSlice.reducer;
