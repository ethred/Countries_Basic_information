import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchCountries } from '../redux/countries/countriesSlice';
import styles from './countrydetails.module.css';

function CountryDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const theCountry = countries.find((country) => country.name.common === id);

  if (!theCountry) {
    return (
      <div className={styles.countryDetailsContainer}>
        <h1>Country Details</h1>
        <p>Country not found</p>
      </div>
    );
  }

  return (
    <div className={styles.countryDetailsContainer}>
      <Link to="/">
        <img src="https://img.icons8.com/ios/30/circled-left-2.png" alt="circled-left-2" title="turn back" />
      </Link>
      <img src={theCountry.flags.svg} alt="country flag" className={styles.flag} />
      <table className={styles.countryDetailsTable}>
        <thead className={styles.tableHead}>
          <th>Country Name</th>
          <th>{theCountry.altSpellings[2] || theCountry.altSpellings[1]}</th>
        </thead>
        <tbody className={styles.tableBody}>
          <tr>
            <td className={styles.label}>Area(km2)</td>
            <td className={styles.value}>{theCountry.area}</td>
          </tr>
          <tr>
            <td className={styles.label}>Capital</td>
            <td className={styles.value}>{theCountry.capital}</td>
          </tr>
          <tr>
            <td className={styles.label}>Population</td>
            <td className={styles.value}>{theCountry.population}</td>
          </tr>
          <tr>
            <td className={styles.label}>Time Zone</td>
            <td className={styles.value}>{theCountry.timezones}</td>
          </tr>
          <tr>
            <td className={styles.label}>Start of the week</td>
            <td className={styles.value}>{theCountry.startOfWeek}</td>
          </tr>
          <tr>
            <td className={styles.label}>Official Language</td>
            <td className={styles.value}>{Object.values(theCountry.languages)}</td>
          </tr>
          <tr>
            <td className={styles.label}>Currency Symbol</td>
            <td className={styles.value}>{Object.keys(theCountry.currencies)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
