import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {            // async is most last methods for asyncronious programming
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

        const { data:{confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);
         const modifieddata = {confirmed,recovered,deaths,lastUpdate,}   

            return modifieddata;
         
        
         
    } catch (error) {

    }
}