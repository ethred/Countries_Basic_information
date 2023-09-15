import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countriesSlice';
import filtersReducer from './searchbox/searchboxSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    filters: filtersReducer,
  },
});

export default store;
