import React from 'react';

const Form = props => (
    //This line calls the getWeather method defined in the Search component upon submission.
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="country" placeholder="Country" />
            <button>Submit</button>
        </form>
        );  

export default Form;