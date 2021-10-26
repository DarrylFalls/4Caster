import axios from "axios"
import { useEffect } from "react"


const Location = ({ locationData, setWeather, weather }) => {
  const getWeather = async () => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationData.latLng.lat}&lon=${locationData.latLng.lng}&units=imperial&exclude=minutely&appid=ee5d53a1026a07610d0cd0ca65f2c148`)
    console.log(res.data)
    setWeather(res.data)
  }
  useEffect(() => {
    getWeather()
  }, [locationData])
  return (
    <div>
      <div>
        <h1>{locationData.adminArea5}</h1>
      </div>
    </div>
  )
}

export default Location