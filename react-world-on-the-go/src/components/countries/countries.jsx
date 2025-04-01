import React, { use } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {
  const countries= use(countriesPromise)
    return (
        <div>
            <h2>Travaling countries : {countries.length}</h2>
           <div  className='countries'>
           {
                countries.map(country=><Country key={country.cca3} country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;