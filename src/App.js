import React from 'react';

import { Cards, CountryPicker, Charts, } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './image/image.svg';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <h1>COVID-19 Tracker</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} /> 
        
      </div>
    );
  }
}

export default App;