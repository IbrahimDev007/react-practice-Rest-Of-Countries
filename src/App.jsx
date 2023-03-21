import { useState ,useEffect} from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="app">
    <LoadCountries/>
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
      {/* {
        countries.map(country=>)
      } */}
    </div>
  )
  
}

export default App
