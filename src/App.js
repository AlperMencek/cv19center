import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Cards, GlobalCard, Charts, SearchBar, Standings} from './components';
import {fetchData , fetchSumData} from './api';
import styles from './App.module.css';
import Details from './routes/Details';
class App extends React.Component{
       
        state = {
            data: {},
            c19data:{},
            topData:{},
            country: '',
        }
     //lifecycle method
    async componentDidMount(){
        const fetchPayload = await fetchData();
        const fetchRes = await fetchSumData();
      
        this.setState({data:fetchPayload, c19data: fetchRes });
        
       // console.log(data);
    };

    //handling picker country change
     handleCountryChange = async (country) =>{
        const data = await fetchData(country);
        console.log(data)
        this.setState({ data, country: country});

    }
    render(){
        const {data,c19data,topData, country} = this.state;
        return(
            <div className={styles.container}>
                {/* <Cards  data = {data}/> */}
                <GlobalCard c19data = {c19data}/>
                <SearchBar  handleCountryChange = {this.handleCountryChange}/>
                <Charts data = {data} country = {country} />
                <Standings c19data = {c19data} />
            </div>
        )
    }
};

export default App;