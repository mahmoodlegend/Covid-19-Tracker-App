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
// Command: npm install --save axios react-chartjs-2 react-countup classnames
// 1) axios we get request to api 
// 2) react-chartjs-2 for making chart
// 3) react-countup for making number count for animation
class App extends React.Component {
    

    async componentDidMount() {
        const data = await fetchData();
        console.log(data);
    }

    render() {
        return (
            <div div className={styles.container}>
                {/* Same as className = container  , It make sure that you not have interface fromany other file  */}
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;