import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/searchbox/searchboxSlice'; // Import setSearchTerm from filtersSlice
import Navbar from './Navbar';
import styles from './searchbox.module.css';

function Searchbox() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <section className={styles.searchBoxContainer}>
      <Navbar />
      <input
        type="text"
        className={styles.searchbox}
        placeholder="Enter a country name..."
        onChange={(e) => handleChange(e)}
      />
    </section>
  );
}

export default Searchbox;
