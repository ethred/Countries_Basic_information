import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countriesSlice';
import searchByNameReducer from './searchByName/searchByNameSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    filters: searchByNameReducer,
  },
});

export default store;
