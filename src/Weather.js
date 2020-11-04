import React from 'react';

//Function converts Kelvin to Fahrenheit and rounds off the decimal.
function toF(K) {
  return(
  Math.round((K-273.15) * 9 / 5 + 32)
  )
}

const Weather = props => (
      <div>
        {/* Displays data passed down from props only if all conditions are true. */}
        { props.city && props.country && <p>Location: {props.city}, {props.country}</p> }
        { props.temperature && <p>Temperature: {toF(props.temperature)}</p>}
        { props.humidity && <p>Humidity: {props.humidity}</p>}
        { props.description && <p>Conditions: {props.description}</p>}
        { props.error && <p>{props.error}</p>}
      </div>
);

export default Weather;