import React, { useState, useEffect } from 'react';
import styles from './USmap.module.css';
import { Chart } from 'react-google-charts';
import {fetchStateData} from '../../api';

const USmap = () => {

    const [fetchedStates, setFetchedStates] = useState([]);

    useEffect(() => {
        const fetchStates = async () => {
          setFetchedStates(await fetchStateData());
    
        }
        fetchStates();
        
      }, [setFetchedStates]);
      
      if(fetchedStates.length){
        return (
            
            <div className={styles.container}>
                <div className = {styles.topTitle}>US STATES</div>
                
            <Chart
                width={'100%'}
                height="260px"
                title= {'USA'}
                chartType="GeoChart"
                data={[
                    ['State', 'Cases', 'Deaths'],
                    ...fetchedStates.map((state) => [state.state, state.confirmed, state.deaths])
                  ]}
                options={{
                    region: 'US',
                    displayMode: 'regions',
                    resolution: 'provinces',
                    colorAxis: { colors: ['rgb(251,231,233)', 'rgb(168,48,60)'] },
                    backgroundColor: 'rgb(20, 20, 20)',
                    legend: 'none',
                    
                }}
                
                // Note: you will need to get a mapsApiKey for your project.
                // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                mapsApiKey= {process.env.GOOGLE_API_KEY}
                rootProps={{ 'data-testid': '2' }}
            />
            </div>
            
            
            
        )
        }
        return ( <div>Loading...</div>)
}

export default USmap;