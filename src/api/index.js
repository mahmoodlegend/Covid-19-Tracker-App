import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {            // async is most last methods for asyncronious programming

     let changeableUrl = url;

     if (country){
         changeableUrl = `${url}/countries/${country}`
     }

    try {
        // const { data } = await axios.get(url);  //This will get data from url   {axios connect to api}

        // const modifieddata = {                      // We destrutured data 
        //     confirmed: data.confirmed,
        //     recovered: data.recovered,
        //     deaths: data.deaths,
        //     lastUpdate: data.lastUpdate,
        // }
        // return modifieddata;   
        //###########easy way to do this ###################
        //const { data:{ confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);
        // const modifieddata = {                       
        //         confirmed: confirmed,         In java if key and value have same name then auto take it
        //         recovered: recovered,       
        //         deaths: deaths,
        //         lastUpdate: lastUpdate,
        //     }  

        //###############Most Simplified ###########################

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {
        return error;
    }
};
// As for chart we need daily Data

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);       // `${url}/daily` mean As we are getting second part of data

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedData;
    }

    catch (error) {
        return error;
    }
};

export const fetchCountries= async () =>{
    try{
        const { data: { countries }} = await axios.get(`${url}/countries`)   // destructure countries out of data
        return countries.map((country) => country.name);
    }
    catch (error) {
        return error;
    }
};