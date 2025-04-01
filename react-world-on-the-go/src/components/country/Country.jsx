import React from 'react';
import'./country.css'
const Country = ({country}) => {
    console.log(country)
    return (
        <div className='country'>
            <h4>Name : {country.name.common}</h4>
            <img src={country.flags.png} alt="" />
            <p>Indepandent : {country.independent ? 'Freedom' : 'Ruleled'}</p>
            <p>Population : {country.population}</p>
        </div>
    );
};

export default Country;