import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [user, setUser] = useState('')
  const [favorites, setFavorites] = useState([])
  const [currentForcast, setCurrentForcast] = ('')
  const [location, setLocation] = useState('')
  const [locationData, setLocationData] = useState('')
  // const []

  //weatherAPIkey = 5ae4ab16cf1646c9910231906212410


  const getLocation = async () => {
    const res = await axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=bTdBubAIGCp23LC0DL0nfCNW3R4HzIQj&location=${location}`)
    console.log(res.data)
  }

  const getWeather = async () => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=50&lon=50&units=imperial&exclude=minutely&appid=ee5d53a1026a07610d0cd0ca65f2c148`)
    console.log(res.data)
  }


  // const getWeather = async () => {
  //   const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=5ae4ab16cf1646c9910231906212410&q=London&days=7&aqi=yes&alerts=yes`)
  //   console.log(res.data)
  // }
  const getUserInfo = async () => {
    const res = await axios.get('https://api.airtable.com/v0/app4ZMuiUaRsyIY94/Table%201?api_key=key3kKNmypHQOUSxM')
    setUser(res.data.records)
    console.log(res.data.records)
  }

  useEffect(() => (
    getWeather(),
    getUserInfo()
  ), [])
  return (
    <div className="App">
      <div>

      </div>
      <a href="https://www.weatherapi.com/" title="Weather API">Powered by WeatherAPI.com</a>
    </div>
  );
}

export default App;
