import React,{useEffect,useState} from 'react';
import Country from '../country/country';


const Countryes=()=> {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
  .then(res=>res.json())
  .then(data=>setCountries(data))
  }, [])
  
  return(
    <div>
      <h1>Visiting Every Countries</h1>
      <h3>Availavale countries:{countries.length}</h3>
      {
        countries.map(country=>(
          <Country name={country.name.common}/>  )
          )
      }
    </div>
  )
  
}

export default Countryes;
 