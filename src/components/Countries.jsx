import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../redux/countries/countriesSlice';
import { selectSearchTerm } from '../redux/searchbox/searchboxSlice';
import styles from './countries.module.css';

function Countries() {
  const dispatch = useDispatch();

  // Selectors
  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.loading);
  const error = useSelector((state) => state.countries.error);
  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  // Filter countries based on the search term
  const filteredCountries = countries.filter(
    (country) => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Render loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>List of Countries</h1>
      <div className={styles.countriesContainer}>
        {filteredCountries.map((country) => (
          <div className={styles.countryContainer} key={country.name.common}>
            <img src={country.flags.svg} alt={country.flags.alt} className={styles.flag} />
            <span className={styles.commonName}>
              Common Name:
              {' '}
              {country.name.common}
            </span>
            <span className={styles.capitalName}>
              Capital Name:
              {' '}
              {country.capital}
            </span>
            <span className={styles.population}>
              Population:
              {' '}
              {country.population}
            </span>
            <Link to={`/country/${country.name.common}`} className={styles.link}>
              More info
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countries;
