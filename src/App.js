import React from 'react';
import reactDOM from 'react-dom';

import {Cards, Charts, SearchBar} from './components';
import {fetchData} from './api';
import styles from './App.module.css';
class App extends React.Component{
        //lifecycle method
        state = {
            data: {},

        }
    async componentDidMount(){
        const fetchPayload = await fetchData();
        this.setState({data:fetchPayload});
       // console.log(data);
    };
    render(){
        const {data} = this.state;
        return(
            <div className = {styles.container}>
                <Cards  data = {data}/>
                <SearchBar />
                <Charts />
            </div>
        )
    }
};

export default App;