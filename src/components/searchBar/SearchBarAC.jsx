import React,{ useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route,Link, Redirect } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

import {fetchC19Countries, countries} from '../../api';

import styles from './searchBar.module.css';
    //changes only when etfetchedcountries change or when another country is selected.
    function countryToFlag(isoCode) {
        return typeof String.fromCodePoint !== 'undefined'
        ? isoCode
            .toUpperCase()
            .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : isoCode;
    }
  
const useStyles = makeStyles(theme => ({
  inputRoot: {
    color: "black",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "grey"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "grey"
    }
  }
}));
const SearchBarAC = ({c19data:{Global , dateTime,Countries}}) => {
    console.log(Countries)
    const [fetchedCountries, setFetchedCountries] = useState([]);
    const [redirect, setRedirect] = useState();
    function handleInputChange(event, value) {

      setRedirect(value);

      
    }
      
    useEffect(() =>{
        const fetchCountries = async () =>{
            setFetchedCountries(await fetchC19Countries());
            
        }
        
        fetchCountries();
    }, [setFetchedCountries]);
      console.log(fetchedCountries)
    //  console.log(fetchedCountries[0])
     const classes = useStyles();
     let slug;
    if(fetchedCountries.length && !redirect){
        const selections = fetchedCountries
      
    
        return(
         
          <div className={styles.container}>
            <Autocomplete
                id="country-select-demo"
                style={{ width: 300, background:'white'}}
                options={selections}
                classes={classes}
                autoHighlight
                getOptionLabel={(option) => (option.Slug)}
                renderOption={(option) => (
                  <React.Fragment>
                  <span>{countryToFlag(option.ISO2)} </span> 
                    {option.Country}   ({option.ISO2})
                  </React.Fragment>
                )}
                onChange={handleInputChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose a country"
                    variant="outlined"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
              />
              )}
          />
     
        </div>)
    }
    /* Once location is selected from picker*/

    if(redirect){
      console.log(redirect.Country)
      return(
      <Redirect push to={{ 
        pathname:'/details',
        state:{
            title: redirect.Country,
            slug: redirect.Slug,
            all:Countries,
           }

        }} 
      />
      )
    }
  
    return(
        <div className={styles.container}>
            cxvzzzzzzzzzzz
        </div>
    )
  
}
export default SearchBarAC;