import React, { useState } from 'react';
import'./country.css'
const Country = ({country,handlevisitedCountries,handleVisitedFlags}) => {
    // console.log(handlevisitedCountries)
    const [visited,setVisited] = useState(false)
    const handleVisited=()=>{
        // setVisited(!visited)

       if(visited === true){
        setVisited(false)
       }
       else{
        setVisited(true)
       }
       handlevisitedCountries(country)
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h4>Name : {country.name.common}</h4>
            <img src={country.flags.png} alt="" />
            <p>Indepandent : {country.independent ? 'Freedom' : 'Ruleled'}</p>
            <p>Population : {country.population}</p>
            <button className={visited ? 'btn-visited':'btn-not-visited'} onClick={handleVisited}>{visited ? 'Visited' : 'Not visited'}</button>
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Added visited flags</button>
        </div>
    );
};

export default Country;