import './Current.css'
import axios from 'axios'
import snow from '../images/snow.mp4'
import sunny from '../images/sunny-day.mp4'
import clearNight from '../images/clear-night.mp4'
import cloudyDay from '../images/cloudy-day.mp4'
import cloudyNight from '../images/cloudy-night.mp4'
import rain from '../images/rain.mp4'
import thunder from '../images/thunderstorm.mp4'
import foggyDay from '../images/foggy-day.mp4'
import foggyNight from '../images/foggy-night.mp4'



const Current = ({ locationData, weatherData, loggedIn, user, favorites, setFavorites, userData, setUserData }) => {
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

  return (
    <div className='current-display'>
      <div className='video-div'>
        {weatherData ? weatherData.current.weather[0].icon === '01d' || weatherData.current.weather[0].icon === '02d' ? <video className='background-video' width="750" src={sunny} height="500" autoPlay loop muted playsInline ></video> : null : null}
        {weatherData ? weatherData.current.weather[0].icon === '01n' || weatherData.current.weather[0].icon === '02n' ? <video className='background-video' width="750" src={clearNight} height="500" autoPlay loop muted playsInline ></video> : null : null}
        {weatherData ? weatherData.current.weather[0].icon === '03d' || weatherData.current.weather[0].icon === '04d' ? <video className='background-video' width="750" src={cloudyDay} height="500" autoPlay loop muted playsInline ></video> : null : null}
        {weatherData ? weatherData.current.weather[0].icon === '03n' || weatherData.current.weather[0].icon === '04n' ? <video className='background-video' width="750" src={cloudyNight} height="500" autoPlay loop muted playsInline ></video> : null : null}
        {weatherData ? weatherData.current.weather[0].icon === '09d' || weatherData.current.weather[0].icon === '10d' ? <video className='background-video' width="750" src={rain} height="500" autoPlay loop muted playsInline ></video> : null : null}
        {weatherData ? weatherData.current.weather[0].icon === '09n' || weatherData.current.weather[0].icon === '10n' ? <video className='background-video' width="750" src={rain} height="500" autoPlay loop muted playsInline ></video> : null : null}
        {weatherData ? weatherData.current.weather[0].icon === '11d' || weatherData.current.weather[0].icon === '11n' ? <video className='background-video' width="750" src={thunder} height="500" autoPlay loop muted playsInline ></video> : null : null}
        {weatherData ? weatherData.current.weather[0].icon === '13d' || weatherData.current.weather[0].icon === '13n' ? <video className='background-video' width="750" src={snow} height="500" autoPlay loop muted playsInline ></video> : null : null}
        {weatherData ? weatherData.current.weather[0].icon === '50d' ? <video className='background-video' width="750" src={foggyDay} height="500" autoPlay loop muted playsInline ></video> : null : null}
        {weatherData ? weatherData.current.weather[0].icon === '50n' ? <video className='background-video' width="750" src={foggyNight} height="500" autoPlay loop muted playsInline ></video> : null : null}
      </div>
      <div className='current-info-div'>
      <div className='info'>
        <h1>{locationData.adminArea5}, {locationData.adminArea1 === 'US' ? `${locationData.adminArea3}, ${locationData.adminArea1}` : `${locationData.adminArea1}`}</h1>
      </div>
      <div className='info'>
        {user !== 'Guest' && loggedIn === true ? favorites.find((fav) => fav === locationData.adminArea5) ? null : <p className='add-favorite' onClick={addFavorite}>+ add to favorites</p> : <p>Login to add to favorites</p>}
      </div>
      <div className='info'>
        <h3>{weatherData ? weatherData.current.weather[0].description : null}</h3>
      </div>
      <div>
        {weatherData ?  <img src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`} className='weather-icon' alt='icon' /> : null}
      </div>
      <div className='info'>
        <h1>{weatherData ? `${weatherData.current.temp}° F` : null}</h1>
      </div>
      <div className='info'>
        <h4>{weatherData ? `Feels Like: ${weatherData.current.feels_like}° F` : null}</h4>
      </div>
      <div className='info'>
        <h4>{weatherData ? `Wind Speed: ${weatherData.current.wind_speed}mph` : null}</h4>
        </div>
        </div>
    </div>
  )
}

export default Current