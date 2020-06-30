import React, { useState, useEffect } from 'react';       // Need both useState and use Effect Hooks
import { NativeSelect, FormControl } from '@material-ui/core';    // NativeSelect, FormControl are Element of material-ui
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedcountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());                     // Getting list of each country 
        }

        fetchAPI();
    }, [setFetchedCountries]);


    return (
        <FormControl className={styles.formControl}>    {/*This gives className to style*/}
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>      {/*With "global" it does not allow back to select global from single country so should be empty string*/}    
                {fetchedcountries.map((country, i) => <option key={i} value={country}>{country}</option>)}   
            </NativeSelect>
        </FormControl>
    );                                                                // This function just gives list but not effecting
};
                                                                    // Key is react rules when you maping some thing act as index
export default CountryPicker;