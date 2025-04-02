import React, { useState } from 'react';
import'./country.css'
const Country = ({country}) => {

    const [visited,setVisited] = useState(false)
    const handleVisited=()=>{
        // setVisited(!visited)

       if(visited === true){
        setVisited(false)
       }
       else{
        setVisited(true)
       }
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h4>Name : {country.name.common}</h4>
            <img src={country.flags.png} alt="" />
            <p>Indepandent : {country.independent ? 'Freedom' : 'Ruleled'}</p>
            <p>Population : {country.population}</p>
            <button className={visited ? 'btn-visited':'btn-not-visited'} onClick={handleVisited}>{visited ? 'Visited' : 'Not visited'}</button>
        </div>
    );
};

export default Country;