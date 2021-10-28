import './Current.css'
import axios from 'axios'
import { useState } from 'react'

const Current = ({ locationData, weatherData, loggedIn, user, favorites, setFavorites, userData, setUserData }) => {
  const [videoSrc, setVideoSrc] = useState('')
  const [icon, setIcon] = useState('')
  // console.log(weatherData.current.weather[0].icon)
  // const getIcon = () => {
    
  //   setIcon(weatherData.current.weather[0].icon)
  // }
  // getIcon()
  const resetData = (account) => {
    setUserData(account)
    setFavorites(JSON.parse(account.fields.favorites))
  }
  const addFavorite = async () => {
    let update = {
      records: [{
        id: userData.id,
        fields: {
          username: userData.fields.username,
          password: userData.fields.password,
          favorites: JSON.stringify([...favorites, locationData.adminArea5])
        }
      }]
    }

    await axios.put('https://api.airtable.com/v0/app4ZMuiUaRsyIY94/Table%201?api_key=key3kKNmypHQOUSxM', update)
    const res = await axios.get('https://api.airtable.com/v0/app4ZMuiUaRsyIY94/Table%201?api_key=key3kKNmypHQOUSxM')
    const account = res.data.records.find((record) => record.id === userData.id)
    resetData(account)
  }

  const getVideo = () => {
    if (weatherData.current.weather[0].icon === '01d' || weatherData.current.weather[0].icon === '02d') {
      return ('./images/sunny-day.mp4')
    } else if (weatherData.current.weather[0].icon === '01n' || weatherData.current.weather[0].icon === '02n') {
      return ('./images/clear-night.mp4')
    } else if (weatherData.current.weather[0].icon === '03d' || weatherData.current.weather[0].icon === '04d') {
      return ('./images/cloudy-day.mp4')
    } else if (weatherData.current.weather[0].icon === '03n' || weatherData.current.weather[0].icon === '04n') {
      return ('./images/cloudy-night.mp4')
    } else if (weatherData.current.weather[0].icon === '09d' || weatherData.current.weather[0].icon === '10d') {
      return ('./images/rain.mp4')
    } else if (weatherData.current.weather[0].icon === '09n' || weatherData.current.weather[0].icon === '10n') {
      return ('./images/rain.mp4')
    } else if (weatherData.current.weather[0].icon === '11d' || weatherData.current.weather[0].icon === '11n') {
      return ('./images/thunderstorm.mp4')
    } else if (weatherData.current.weather[0].icon === '13d' || weatherData.current.weather[0].icon === '13n') {
      return ('./images/snow.mp4')
    } else if (weatherData.current.weather[0].icon === '50d') {
      return ('./images/foggy-day.mp4')
    } else if (weatherData.current.weather[0].icon === '50n') {
      return ('./images/foggy-night.mp4')
    }
  }

  return (
    <div className='current-display'>
      <div className='video-div'>
        {weatherData ? <video className='background-video' type='mp4' src='./images/snow.mp4' autoPlay loop muted playsInline ></video> : null}
      </div>
      <div>
        <h1>{locationData.adminArea5}, {locationData.adminArea1 === 'US' ? `${locationData.adminArea3}, ${locationData.adminArea1}` : `${locationData.adminArea1}`}</h1>
      </div>
      <div>
        {user !== 'Guest' && loggedIn === true ? favorites.find((fav) => fav === locationData.adminArea5) ? null : <p className='add-favorite' onClick={addFavorite}>+ add to favorites</p> : <p>Login to add to favorites</p>}
      </div>
      <div>
        <h3>{weatherData ? weatherData.current.weather[0].description : null}</h3>
      </div>
      <div>
        {weatherData ?  <img src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`} className='weather-icon' /> : null}
      </div>
      <div>
        <h1>{weatherData ? `${weatherData.current.temp}° F` : null}</h1>
      </div>
      <div>
        <h4>{weatherData ? `Feels Like: ${weatherData.current.feels_like}° F` : null}</h4>
      </div>
      <div>
        <h4>{weatherData ? `Wind Speed: ${weatherData.current.wind_speed}mph` : null}</h4>
      </div>
    </div>
  )
}

export default Current