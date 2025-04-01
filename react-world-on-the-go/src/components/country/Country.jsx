import React from 'react';

const Country = ({country}) => {
    console.log(country)
    return (
        <div>
            <h4>Name : {country.name.common}</h4>
            <img src={country.flags.png} alt="" />
            <p>Indepandent : {country.independent ? 'Freedom' : 'Ruleled'}</p>
            <p>Population : {country.population}</p>
        </div>
    );
};

export default Country;