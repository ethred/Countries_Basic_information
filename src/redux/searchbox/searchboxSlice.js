import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = filtersSlice.actions;
export const selectSearchTerm = (state) => state.filters.searchTerm;
export default filtersSlice.reducer;
