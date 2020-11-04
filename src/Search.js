import React from 'react';
import Form from './Form';
import Weather from './Weather';

const API_KEY = "77770f5e783b278efb85bb2f676b854d";

class Search extends React.Component {

    //Creation of initial state of object.
        state = {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined
        }

  getWeather = async (e) => {

    //Prevents page from refreshing upon form submission.
    e.preventDefault();

    //Derives value of input fields from form to insert into API.
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    //This line makes the API call to openweathermap.org and inserts the API key as defined above as well as city and country.
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);

    //Conditional statement to check for input before updating state.
    if (city && country) {

        //This line converts the response from the API into json format.
        const data = await api_call.json();
        console.log(data);

        //Updates value of state after API call.
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
            });
        }  else {
            //If incompatible input is entered state remains undefined, error generated.
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter values."
                });
        } 
  }

  render() {
    return(
      <div>
        {/* This line renders the Form component and passes down the getWeather function as a prop. */}
        <Form getWeather={this.getWeather} />
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

export default Search;