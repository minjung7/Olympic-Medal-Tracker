import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MedalForm from './MedalForm'
import MedalList from './MedalList'



const App = () => {
  const [countries, setCountries] = useState([]);
  console.log(countries);
  return (
    <div>
      
<MedalForm countries={countries} setCountries={setCountries}/>
<MedalList countries={countries} setCountries={setCountries}/>
</div>
  )
}


export default App
