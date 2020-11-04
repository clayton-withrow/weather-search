import React from 'react';

const Getl = props => (
    //This line calls the getWeather method defined in the Current component upon submission.
            <button align="center" onClick={props.getWeather} disabled={props.loading}>
                {/* Checks if browser has location enabled before enabling getWeather check. */}
                { props.loading
                    ? 'Please Allow Access to Location'
                    : 'Click for Weather in current Location' 
                }
            </button>
        );  

export default Getl;