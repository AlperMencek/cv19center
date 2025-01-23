import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStats, Charts, Standings, SearchBarAC, Footer, USmap } from './components';
import { fetchData, fetchSumData, fetchC19Countries } from './api';
import styles from './App.module.css';
import logo from './images/CVCenterLogo.png'
import {Link } from 'react-router-dom';

// class App extends React.Component {
function App(props){

    const [fetchedData, setFetchedData] = useState([]);
    const [fetchedC19Data, setFetchedC19] = useState([]);
    const [fetchedCountries, setFetchedCountries] = useState([]);
    const [fetchedCountry, setFetchedCountry] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            setFetchedData(await fetchData());
            setFetchedC19(await fetchSumData());
            setFetchedCountries(await fetchC19Countries());
 
        
        }

    
      fetchCountries();
       }, []);
    
       const c19data = fetchedC19Data
      
        if (c19data) {
            return (
                <div className={styles.container}>
                    <Link className={styles.link} to={{  pathname:'/'}}><img src={logo} alt="Corona Virus Center" resizeMode="contain"/></Link>
                    <GlobalStats c19data={c19data} />
                     <SearchBarAC c19data={c19data} />   
                    <Charts data={fetchedData} country={fetchedCountry} />
                 <Standings c19data={c19data} /> 
                    <USmap/>
                    <Footer/>
                </div>
            )
        }
        return (
            <div className={styles.container}>
                Loading...
           
            </div>
        )

};

export default App;