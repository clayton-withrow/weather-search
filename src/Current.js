import React from 'react';
import Weather from './Weather';
import Getl from './Getl';

const API_KEY = "77770f5e783b278efb85bb2f676b854d";

class Current extends React.Component {

  //Sets initial value of state.
  constructor(props) {
    super(props) 
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      loading: true,
    }
  }

  //Defines latitude and longitude constants
  componentWillMount() {
    this.getLocation()
        .then((position) => {
          const loading = false
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude
          this.setState({
            latitude,
            longitude,
            loading
          })
        })
  }

  //Gets lat + long coords from browser.
  getLocation = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  getWeather = async (e) => {

    //This line makes the API call to openweathermap.org and inserts the API key as defined above along with latitude and longitude coords.
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=${API_KEY}`);

    //This line converts the response from the API into json format.
    const data = await api_call.json();

    //Updates value of state after API call.
    this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
        });
  }

  render() {
    return(
      <div>
        {/* This line renders the GetL component and passes down the getWeather function as a prop. */}
        <Getl 
          getWeather={this.getWeather} 
          loading={this.state.loading}
        />
        {/* Calls the weather components and passes state as a prop. */}
        <Weather 
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
            />
      </div>
    )
  }
}

export default Current;