import axios from "axios"
import { useEffect, useState } from "react"
import Current from "./Current"
import DailyForecast from "./DailyForecast"
import DailyForecastSmall from "./DailyForecastSmall"


const Location = ({ locationData, setWeather, weather, loggedIn, user, favorites, setFavorites, userData, setUserData }) => {
  const [weatherData, setWeatherData] = useState('')
  const getWeather = async () => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationData.latLng.lat}&lon=${locationData.latLng.lng}&units=imperial&exclude=minutely&appid=ee5d53a1026a07610d0cd0ca65f2c148`)
    setWeatherData(res.data)
  }
  useEffect(() => {
    getWeather()
  }, [locationData])
  return (
    <div>
      <div>
        <Current locationData={locationData} weatherData={weatherData} loggedIn={loggedIn} user={user} favorites={favorites} setFavorites={setFavorites} userData={userData} setUserData={setUserData} />
      </div>
      <div>
        {window.screen.width < 800 ? <DailyForecastSmall weatherData={weatherData} /> : <DailyForecast weatherData={weatherData}/>}
      </div>
    </div>
  )
}

export default Location