import axios from "axios"
import { useEffect, useState } from "react"
import Current from "./Current"


const Location = ({ locationData, setWeather, weather }) => {
  const [weatherData, setWeatherData] = useState('')
  const getWeather = async () => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationData.latLng.lat}&lon=${locationData.latLng.lng}&units=imperial&exclude=minutely&appid=ee5d53a1026a07610d0cd0ca65f2c148`)
    console.log(res.data)
    setWeatherData(res.data)
  }
  useEffect(() => {
    getWeather()
  }, [locationData])
  return (
    <div>
      <div>
        <Current locationData={locationData} weatherData={weatherData}/>
      </div>
    </div>
  )
}

export default Location