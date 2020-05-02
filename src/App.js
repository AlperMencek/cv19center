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
        const data = await fetchData();
        console.log(data);
    };
    render(){
        return(
            <div className = {styles.container}>
                <Cards />
                <SearchBar />
                <Charts />
            </div>
        )
    }
};

export default App;