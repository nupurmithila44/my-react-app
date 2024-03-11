
import { useState } from 'react';
import './country.css'

const Country = ({country, handleClick1, handleClick2}) => {
const {name,flags, population, area, cca3}=country
const [visited, setvisited]=useState(false)
const handleClick =()=>{
    setvisited(!visited)
}


    return (
        <div className={`country ${visited? 'visited': 'nonVisited'}`}>
            <h3 style={{ color: visited? 'red': 'black'}} >{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area : {area}</p>
            <p><small>code: {cca3}</small></p>
            <button onClick={()=>handleClick1(country) }>mark visit</button> <br />
            <button onClick={()=>handleClick2(country.flags.png)} >flags visit</button> <br />
            <button onClick={handleClick}>{visited? 'visited':'Going'}</button>
        {visited? 'i have visited.':'i want to visited'}
        </div>
    );
};

export default Country;