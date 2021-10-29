import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Location from './components/Location';
import Home from './components/Home';
import {Route} from 'react-router-dom'
import CreateAccount from './components/CreateAccount';


function App() {
  const [user, setUser] = useState('')
  const [userData, setUserData] = useState('')
  const [favorites, setFavorites] = useState([])
  const [weather, setWeather] = ([])
  const [location, setLocation] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [onHomePage, setOnHomePage] = useState(true)

  return (
    <div className="App">
      <Navbar setLocation={setLocation} location={location} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setOnHomePage={setOnHomePage} favorites={favorites} userData={userData} user={user} setUser={setUser} />
      <div className='display-div'>
        <Route path='/' exact>
          {onHomePage ? <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} userData={userData} setUserData={setUserData} setFavorites={setFavorites} /> : null}
        </Route>
        
        {location && onHomePage === false ? <Location locationData={location} setWeather={setWeather} weather={weather} loggedIn={loggedIn} user={user} favorites={favorites} setFavorites={setFavorites} userData={userData} setUserData={setUserData} /> : null}
        
        <Route path='/create-account'>
          <CreateAccount setUserData={setUserData} setUser={setUser} setLoggedIn={setLoggedIn} setFavorites={setFavorites}/>
        </Route>
      </div>
    </div>
  );
}

export default App;
