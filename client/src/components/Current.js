import './Current.css'
import axios from 'axios'
import { useState } from 'react'

const Current = ({ locationData, weatherData, loggedIn, user, favorites, setFavorites, userData, setUserData }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [id, setId] = useState('')
  const newFavs = () => {
    setFavorites(favorites.push(locationData.adminArea5))
    setUsername(userData.fields.username)
    setId(userData.id)
    setPassword(userData.fields.password)
    console.log(favorites)
  }
  const resetData = (account) => {
    setUserData(account)
    setFavorites(account.fields.favorites)
    console.log(favorites)
  }
  const addFavorite = async () => {
    console.log(favorites)
    console.log(username)
    console.log(password)
    console.log(id)
    newFavs()
    let update = {
      records: [{
        id,
        fields: {
          username,
          password,
          favorites,
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
      <div>
        <h1>{locationData.adminArea5}, {locationData.adminArea1 === 'US' ? `${locationData.adminArea3}, ${locationData.adminArea1}` : `${locationData.adminArea1}`}</h1>
      </div>
      <div>
        {user !== 'Guest' && loggedIn == true ? <p className='add-favorite' onClick={addFavorite}>+ add to favorites</p> : <p>Login to add to favorites</p>}
      </div>
      <div>
        <h3>{weatherData ? weatherData.current.weather[0].description : null}</h3>
      </div>
      <div>
        {weatherData ? <img src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`} className='weather-icon' /> : null}
      </div>
      <div>
        <h1>{weatherData ? `${weatherData.current.temp}° F` : null}</h1>
      </div>
    </div>
  )
}

export default Current