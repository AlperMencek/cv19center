import React from 'react';
import reactDOM from 'react-dom';

import {Cards, GlobalCard, Charts, SearchBar} from './components';
import {fetchData , fetchSumData} from './api';
import styles from './App.module.css';
class App extends React.Component{
       
        state = {
            data: {},
            c19data:{},
            country: '',
        }
     //lifecycle method
    async componentDidMount(){
        const fetchPayload = await fetchData();
        const fetchRes = await fetchSumData();
        console.log(fetchRes)
        this.setState({data:fetchPayload, c19data: fetchRes});
        
       // console.log(data);
    };

    //handling picker country change
     handleCountryChange = async (country) =>{
        const data = await fetchData(country);
        console.log(data)
        this.setState({ data, country: country});

    }
    render(){
        const {data,c19data, country} = this.state;
        return(
            <div className={styles.container}>
                {/* <Cards  data = {data}/> */}
                <GlobalCard c19data = {c19data}/>
                <SearchBar  handleCountryChange = {this.handleCountryChange}/>
                <Charts data = {data} country = {country} />
            </div>
        )
    }
};

export default App;