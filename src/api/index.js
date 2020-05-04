import axios from 'axios';
const url = ' https://covid19.mathdro.id/api';
const c19URL = 'https://api.covid19api.com/';

export const fetchData = async (country) =>{
    let fetchURL = url;

    if (country) {
        console.log('within IF')
      fetchURL = `${url}/countries/${country.toUpperCase()}`;
      console.log(fetchURL)
    }
    try {

        const { data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(fetchURL);
        //structuring the response data from api
       return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        };

    } catch (error) {
        
    }
}
export const fetchSumData = async (country) =>{
    let fetchURL = `${c19URL}/summary`;

    // if (country) {
    //     console.log('within IF')
    //   fetchURL = `${url}/countries/${country.toUpperCase()}`;
    //   console.log(fetchURL)
    // }
    try {

        const { data: {Global, Date : dateTime}} = await axios.get(fetchURL);
        //structuring the response data from api
        console.log(Global);
       return {
            Global,
            dateTime
        };

    } catch (error) {
        return error;
    }
}

export const fetchDailyData = async() =>{
    try {
        const { data } = await axios.get(`${url}/daily`);
        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));

        console.log(data)
        } catch (error) {
        return error;
    }
}


export const fetchSummaryData = async() =>{
    try {
        const { data } = await axios.get(`${c19URL}/summary`);
        return data.map(({ Global, reportDate: date }) => ({ newConfirmed: Global.newConfirmed, TotalConfirmed: Global.TotalConfirmed, date }));

        console.log(data)
        } catch (error) {
        return error;
    }
}


export const countries = async() =>{
    try {
        const {data : {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        return error;
    }
}