import { useState ,useEffect} from 'react'
import Countryes from './component/Countryes/Countryes';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="app">
    <Countryes/>
   </div>
  )
}

function LoadCountries() {
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
        countries.map(country=>
          <Country name={country.name.common}></Country>
          )
      }
    </div>
  )
  
}




export default App
