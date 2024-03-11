import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './countris.css'



const Countris = () => {
   const [countris, setCountris] = useState([])
   const [visitedCountry, setVisitedCountry] =useState([]);
   const [ visitedFlags, setvisitedFlags ]=useState([])

   const handleClick1 = country =>{
      const newvisitedCountry = [...visitedCountry, country];
      setVisitedCountry(newvisitedCountry)
      
   }
   const handleClick2 = flags =>{
      const newvisitFlags = [...visitedFlags, flags];
      setvisitedFlags(newvisitFlags)
   }
   useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
         .then(res => res.json())
         .then(data => setCountris(data))
   })
   return (
      <div >
         <h2>count: {countris.length}</h2>
         <div>
            <h3>visited country : { visitedCountry.length}</h3>
            <ul>
               {
                  visitedCountry.map(country => <li> {country.name.common}</li>)
               }
            </ul>
         </div>
         <div className='flag-container'>
            {
               visitedFlags.map(flags => <img src={flags}></img>)
            }
         </div>
         <div className='countris-container'>
            {
               countris.map(country => <Country
                  key={country.cca3}
                  handleClick1={handleClick1}
                  handleClick2={handleClick2}
                  country={country}></Country>)
            }
         </div>
      </div>
   );
};

export default Countris;   