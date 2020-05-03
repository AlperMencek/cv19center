import React from 'react';
import reactDOM from 'react-dom';

import {Cards, Charts, SearchBar} from './components';
import {fetchData} from './api';
import styles from './App.module.css';
class App extends React.Component{
       
        state = {
            data: {},
            country: '',
        }
     //lifecycle method
    async componentDidMount(){
        const fetchPayload = await fetchData();
        this.setState({data:fetchPayload});
       // console.log(data);
    };

    //handling picker country change
     handleCountryChange = async (country) =>{
        const data = await fetchData(country);
        console.log(data)
        this.setState({ data, country: country});

    }
    render(){
        const {data, country} = this.state;
        return(
            <div className={styles.container}>
                <Cards  data = {data}/>
                <SearchBar  handleCountryChange = {this.handleCountryChange}/>
                <Charts data = {data} country = {country} />
            </div>
        )
    }
};

export default App;