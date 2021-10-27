import { useState } from 'react';
import axios from 'axios'
import './App.css';
import Navbar from './components/Navbar';
import SearchAppBar from './components/Navbar2';
import Location from './components/Location';
import Home from './components/Home';
import {Route, Link} from 'react-router-dom'


function App() {
  const [user, setUser] = useState('')
  const [userData, setUserData] = useState('')
  const [favorites, setFavorites] = useState([])
  const [weather, setWeather] = ([])
  const [location, setLocation] = useState('')
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
        <Route path='/' exact>
          <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} userData={userData} setUserData={setUserData} />
        </Route>
        {/* <Route path='/current-weather/:place'> */}
        {location ? <Location locationData={location} setWeather={setWeather} weather={weather} /> : null}
        {/* </Route> */}
      </div>
      
    </div>
  );
}

export default App;
