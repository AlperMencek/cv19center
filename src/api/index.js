import axios from "axios";
const url = " https://covid19.mathdro.id/api";
const c19URL = "https://api.covid19api.com/";
const statesURL = "https://covidtracking.com/api/states";
const ak = process.env.REACT_APP_API_KEY;

export const fetchData = async (country) => {
  let fetchURL = url;

  if (country) {
    fetchURL = `${url}/countries/${country.toUpperCase()}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(fetchURL);
    //structuring the response data from api
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) { }
};
export const fetchSumData = async (country) => {
  let fetchURL = `${c19URL}summary`;

  try {
    const {
      data: { Global, Date: dateTime, Countries },
    }= await axios.get(fetchURL, {
      headers: {
        'X-Access-Token': ak
      }});
    //structuring the response data from api
    return {
      Global,
      dateTime,
      Countries,
    };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));

  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${c19URL}summary`, {
      headers: {
        'X-Access-Token': ak
      }});
    return data.map(({ Countries }) => ({ Countries }));
  } catch (error) {
    return error;
  }
};




//Confirmed API call 
export const fetchc19DailyConfirmedData = async (country) => {
  let fetchURL = c19URL;
  if (country) {
    fetchURL = `${c19URL}total/dayone/country/${country}/status/confirmed`;
  }
  try {
    var apiData = await axios.get(fetchURL, {
      headers: {
        'X-Access-Token': ak
      }});
    return apiData.data.map((obj) => ({ Cases: obj.Cases, date: obj.Date }));
  } catch (error) {
    return error;
  }
};
//Deaths Data
export const fetchc19DailyDeathsData = async (country) => {
  let fetchURL = c19URL;
  if (country) {
    fetchURL = `${c19URL}total/dayone/country/${country}/status/deaths`;
  }
  try {
    var apiData = await axios.get(fetchURL, {
      headers: {
        'X-Access-Token': ak
      }});
    return apiData.data.map((obj) => ({ Cases: obj.Cases, date: obj.Date }));
  } catch (error) {
    return error;
  }
};
//Recovered Data
export const fetchc19DailyRecoveredData = async (country) => {
  let fetchURL = c19URL;
  if (country) {
    fetchURL = `${c19URL}total/dayone/country/${country}/status/recovered`;
  }
  try {
    var apiData = await axios.get(fetchURL, {
      headers: {
        'X-Access-Token': ak
      }});
    return apiData.data.map((obj) => ({ Cases: obj.Cases, date: obj.Date }));
  } catch (error) {
    return error;
  }
};


//Returns a list of available countries from the API
export const fetchC19Countries = async () => {
  try {
    const {
      data
    } = await axios.get(`${c19URL}countries`);
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchCovid19API = async () => {
    const getSummary = await axios.get(`${c19URL}summary`);
    const getCountries = await axios.get(`${c19URL}countries`);
    axios.all([getSummary]).then(
        axios.spread((...allData) =>{
          const summaryData = allData[0];
          const countryData = allData[1];
     
        })
    )
}
//Get state information 

export const fetchStateData = async () => {
  
  try {
    var apiData = await axios.get(statesURL);
    return apiData.data.map((obj) => ({ state: obj.state, confirmed: obj.positive , deaths:obj.death }));
  } catch (error) {
    return error;
  }
}
