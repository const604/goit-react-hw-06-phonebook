import { createSlice } from '@reduxjs/toolkit';

// const filterInitialState = {
//   status: '',
// };

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
