import { useState } from 'react';
import axios from 'axios'
import './App.css';
import Navbar from './components/Navbar';
import SearchAppBar from './components/Navbar2';
import Location from './components/Location';
import Home from './components/Home';
import {Route, Link} from 'react-router-dom'
import CreateAccount from './components/CreateAccount';


function App() {
  const [user, setUser] = useState('')
  const [userData, setUserData] = useState('')
  const [favorites, setFavorites] = useState([])
  const [weather, setWeather] = ([])
  const [location, setLocation] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  


  return (
    <div className="App">
      <Navbar setLocation={setLocation} location={location} loggedIn={loggedIn}/>
      <div>
        <Route path='/' exact>
          <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} userData={userData} setUserData={setUserData} />
        </Route>
        {/* <Route path='/current-weather/:place'> */}
        {location ? <Location locationData={location} setWeather={setWeather} weather={weather} /> : null}
        {/* </Route> */}
        <Route path='/create-account'>
          <CreateAccount setUserData={setUserData} />
        </Route>
      </div>
      
    </div>
  );
}

export default App;
