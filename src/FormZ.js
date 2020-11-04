import React from 'react';

const FormZ = props => (
    //This line calls the getWeather method defined in the Zip component upon submission.
        <form onSubmit={props.getWeather}>
            <input type="text" name="zip" placeholder="Zip" />
            <button>Submit</button>
        </form>
        );  

export default FormZ;