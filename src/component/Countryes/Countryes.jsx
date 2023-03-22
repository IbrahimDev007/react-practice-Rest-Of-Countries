import React,{useEffect,useState} from 'react';
import Country from '../country/country';


const Countryes=()=> {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
  .then(res=>res.json())
  .then(data=>{console.log(data); setCountries(data)})

  }, [])
  
  return(
    <div className=' flex justify-center text-center'>
      <h1>Visiting Every Countries</h1>
      <h3>Availavale countries:{countries.length}</h3>
      <div className='row'>
        
  
        {
        countries.map(country=>(
          <Country countries={country}/>  )
          )
      }
    
   
      </div>
    
    </div>
  )
  
}

export default Countryes;
 