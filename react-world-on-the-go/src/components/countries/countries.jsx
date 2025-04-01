import React, { use } from 'react';
import Country from '../country/Country';

const Countries = ({countriesPromise}) => {
  const countries= use(countriesPromise)
    return (
        <div>
            <h2>Travaling countries : {countries.length}</h2>
            {
                countries.map(country=><Country key={country.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;