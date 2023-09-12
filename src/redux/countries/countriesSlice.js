import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
  loading: false,
  error: null,
};

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  return data;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default countriesSlice.reducer;
