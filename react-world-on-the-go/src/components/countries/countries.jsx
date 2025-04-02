import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {

    const [visitedCountries,setVisitedCountries] =useState([])
    const [visitedFlags,setVisitedFlags]=useState([])

  const countries= use(countriesPromise)
  const handlevisitedCountries=(country)=>{
    // console.log('countries list to visited',country)
    // console.log(visitedCountries)
    const newVisitedCuntries=[...visitedCountries,country]
    // console.log(newVisitedCuntries)
    setVisitedCountries(newVisitedCuntries)
  }
  const handleVisitedFlags=(flags)=>{
       const newVisitedFlags=[...visitedFlags,flags]
       setVisitedFlags(newVisitedFlags)
  }

    return (
        <div>
            <h1>Travaling countries : {countries.length}</h1>
            <h3>Travaled so far : {visitedCountries.length}</h3>
            <div className='visited-flag-container'>
                {
                    visitedFlags.map((flag,index)=> <img key={index} src={flag}></img>)
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country=><li key={country.cca3}> {country.name.common}</li>)
                }
            </ol>
           <div  className='countries'>
           {
                countries.map(country=><Country 
                    key={country.cca3} 
                    handlevisitedCountries={handlevisitedCountries}
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;