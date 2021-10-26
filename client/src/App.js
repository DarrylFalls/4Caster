import { useState } from 'react';
import axios from 'axios'
import './App.css';
import Navbar from './components/Navbar';
import SearchAppBar from './components/Navbar2';
import Location from './components/Location';


function App() {
  const [user, setUser] = useState('')
  const [favorites, setFavorites] = useState([])
  const [weather, setWeather] = ([])
  const [location, setLocation] = useState('')
  const [toggleFetchWeather, setToggleFetchWeather] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)

  

  const getUserInfo = async () => {
    const res = await axios.get('https://api.airtable.com/v0/app4ZMuiUaRsyIY94/Table%201?api_key=key3kKNmypHQOUSxM')
    setUser(res.data.records)
    console.log(res.data.records)
  }


  return (
    <div className="App">
      <Navbar setLocation={setLocation} location={location}/>
      <div>
        {location ? <Location locationData={location} setWeather={setWeather} weather={weather} /> : null}
      </div>
      
    </div>
  );
}

export default App;
