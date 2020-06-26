import React from 'react';

//################## This type of import Product Rush ##################

// import Cards from './components/Cards/Cards';    
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

//####################### Simple Way ################################
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api/index.js';    

                            //We install some of components with   
// Command: npm install --save axios react-chartjs-2 react-countup classnames @material-ui/core
// 1) axios we get request to api 
// 2) react-chartjs-2 for making chart
// 3) react-countup for making number count for animation
// 4) @material-ui/core
class App extends React.Component {
       
        state = {                      // Now we are sending data to cards so that make UI with this data
                                // State is built in function for handle data
            data : {},                 // It Still Empty Object Initalized
        }       

    async componentDidMount() {
        const fetchedData = await fetchData();    // fetchedData word give sense that data is coming in this variable
        
        this.setState({data:fetchedData});    // data:data can be written as only data in JS as key value pair are same but just for clearity     
    }

    render() {

        const { data } = this.state;

        return (
            <div className={styles.container}>
                {/* Same as className = container  , It make sure that you not have interface fromany other file  */}
                <Cards data = {data} />        {/* We pass all data to card Function */}
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;