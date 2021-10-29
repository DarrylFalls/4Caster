import { useState } from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './DailyForecastSmall.css'

const DailyForcastSmall = ({ weatherData }) => {
  const [day, setDay] = useState(0)
  const [more, setMore] = useState(false)
  const addDay = () => {
    setDay(day + 1)
    setMore(false)
  }
  const minusDay = () => {
    setDay(day - 1)
    setMore(false)
  }
  const getDay = (dt) => {
    const date = new Date(dt * 1000);
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return(weekday[new Date(`${month}/${day}/${year}`).getDay()])
  }
  
  return (
    <div className='small-forecast'>
      <div>
        {day > 0 ? <ArrowBackIosIcon onClick={minusDay}/> : null}
      </div>

      <div >
        {weatherData && day === 0 ? 
          <div className='day-div'>
            <h1>Today</h1>
            <h4>{weatherData.daily[0].weather[0].description}</h4>
            <img src={`http://openweathermap.org/img/wn/${weatherData.daily[0].weather[0].icon}.png`} className='small-forecast-icon' alt='icon'/>
            <h4>{`Min: ${weatherData.daily[0].temp.min}° F`}</h4>
            <h4>{`Max: ${weatherData.daily[0].temp.max}° F`}</h4>
            {more ? <h4>{`UV Index: ${weatherData.daily[0].uvi}`}</h4> : null}
            {more ? <h4>{`Humidity: ${weatherData.daily[0].humidity}`}</h4> : null}
            {more ? <h4>{`Dewpoint: ${weatherData.daily[0].dew_point}° F`}</h4> : null}
            {more ? <h4>{`Cloud Coverage: ${weatherData.daily[0].clouds}%`}</h4> : null}
          </div>
          : null}
        {weatherData && day === 1 ?
          <div className='day-div'>
            <h1>{getDay(weatherData.daily[1].dt)}</h1>
            <h4>{weatherData.daily[1].weather[0].description}</h4>
            <img src={`http://openweathermap.org/img/wn/${weatherData.daily[1].weather[0].icon}.png`} className='small-forecast-icon' alt='icon'/>
            <h4>{`Min: ${weatherData.daily[1].temp.min}° F`}</h4>
            <h4>{`Max: ${weatherData.daily[1].temp.max}° F`}</h4>
            {more ? <h4>{`UV Index: ${weatherData.daily[1].uvi}`}</h4> : null}
            {more ? <h4>{`Humidity: ${weatherData.daily[1].humidity}`}</h4> : null}
            {more ? <h4>{`Dewpoint: ${weatherData.daily[1].dew_point}° F`}</h4> : null}
            {more ? <h4>{`Cloud Coverage: ${weatherData.daily[1].clouds}%`}</h4> : null}
          </div> : null}
        {weatherData && day === 2 ?
          <div className='day-div'>
            <h1>{getDay(weatherData.daily[2].dt)}</h1>
            <h4>{weatherData.daily[2].weather[0].description}</h4>
            <img src={`http://openweathermap.org/img/wn/${weatherData.daily[2].weather[0].icon}.png`} className='small-forecast-icon' alt='icon'/>
            <h4>{`Min: ${weatherData.daily[2].temp.min}° F`}</h4>
            <h4>{`Max: ${weatherData.daily[2].temp.max}° F`}</h4>
            {more ? <h4>{`UV Index: ${weatherData.daily[2].uvi}`}</h4> : null}
            {more ? <h4>{`Humidity: ${weatherData.daily[2].humidity}`}</h4> : null}
            {more ? <h4>{`Dewpoint: ${weatherData.daily[2].dew_point}° F`}</h4> : null}
            {more ? <h4>{`Cloud Coverage: ${weatherData.daily[2].clouds}%`}</h4> : null}
          </div> : null}
        {weatherData && day === 3 ? 
        <div className='day-div'>
        <h1>{getDay(weatherData.daily[3].dt)}</h1>
        <h4>{weatherData.daily[3].weather[0].description}</h4>
        <img src={`http://openweathermap.org/img/wn/${weatherData.daily[3].weather[0].icon}.png`} className='small-forecast-icon' alt='icon'/>
        <h4>{`Min: ${weatherData.daily[3].temp.min}° F`}</h4>
        <h4>{`Max: ${weatherData.daily[3].temp.max}° F`}</h4>
        {more ? <h4>{`UV Index: ${weatherData.daily[3].uvi}`}</h4> : null}
        {more ? <h4>{`Humidity: ${weatherData.daily[3].humidity}`}</h4> : null}
        {more ? <h4>{`Dewpoint: ${weatherData.daily[3].dew_point}° F`}</h4> : null}
        {more ? <h4>{`Cloud Coverage: ${weatherData.daily[3].clouds}%`}</h4> : null}
      </div> : null}
        {weatherData && day === 4 ? 
        <div className='day-div'>
        <h1>{getDay(weatherData.daily[4].dt)}</h1>
        <h4>{weatherData.daily[4].weather[0].description}</h4>
        <img src={`http://openweathermap.org/img/wn/${weatherData.daily[4].weather[0].icon}.png`} className='small-forecast-icon' alt='icon'/>
        <h4>{`Min: ${weatherData.daily[4].temp.min}° F`}</h4>
        <h4>{`Max: ${weatherData.daily[4].temp.max}° F`}</h4>
        {more ? <h4>{`UV Index: ${weatherData.daily[4].uvi}`}</h4> : null}
        {more ? <h4>{`Humidity: ${weatherData.daily[4].humidity}`}</h4> : null}
        {more ? <h4>{`Dewpoint: ${weatherData.daily[4].dew_point}° F`}</h4> : null}
        {more ? <h4>{`Cloud Coverage: ${weatherData.daily[4].clouds}%`}</h4> : null}
      </div> : null}
        {weatherData && day === 5 ? 
        <div className='day-div'>
        <h1>{getDay(weatherData.daily[5].dt)}</h1>
        <h4>{weatherData.daily[5].weather[0].description}</h4>
        <img src={`http://openweathermap.org/img/wn/${weatherData.daily[5].weather[0].icon}.png`} className='small-forecast-icon' alt='icon'/>
        <h4>{`Min: ${weatherData.daily[5].temp.min}° F`}</h4>
        <h4>{`Max: ${weatherData.daily[5].temp.max}° F`}</h4>
        {more ? <h4>{`UV Index: ${weatherData.daily[5].uvi}`}</h4> : null}
        {more ? <h4>{`Humidity: ${weatherData.daily[5].humidity}`}</h4> : null}
        {more ? <h4>{`Dewpoint: ${weatherData.daily[5].dew_point}° F`}</h4> : null}
        {more ? <h4>{`Cloud Coverage: ${weatherData.daily[5].clouds}%`}</h4> : null}
      </div> : null}
        {weatherData && day === 6 ? 
        <div className='day-div'>
        <h1>{getDay(weatherData.daily[6].dt)}</h1>
        <h4>{weatherData.daily[6].weather[0].description}</h4>
        <img src={`http://openweathermap.org/img/wn/${weatherData.daily[6].weather[0].icon}.png`} className='small-forecast-icon' alt='icon'/>
        <h4>{`Min: ${weatherData.daily[6].temp.min}° F`}</h4>
        <h4>{`Max: ${weatherData.daily[6].temp.max}° F`}</h4>
        {more ? <h4>{`UV Index: ${weatherData.daily[6].uvi}`}</h4> : null}
        {more ? <h4>{`Humidity: ${weatherData.daily[6].humidity}`}</h4> : null}
        {more ? <h4>{`Dewpoint: ${weatherData.daily[6].dew_point}° F`}</h4> : null}
        {more ? <h4>{`Cloud Coverage: ${weatherData.daily[6].clouds}%`}</h4> : null}
      </div> : null}
        {weatherData && day === 7 ? 
        <div className='day-div'>
        <h1>{getDay(weatherData.daily[7].dt)}</h1>
        <h4>{weatherData.daily[7].weather[0].description}</h4>
        <img src={`http://openweathermap.org/img/wn/${weatherData.daily[7].weather[0].icon}.png`} className='small-forecast-icon' alt='icon'/>
        <h4>{`Min: ${weatherData.daily[7].temp.min}° F`}</h4>
        <h4>{`Max: ${weatherData.daily[7].temp.max}° F`}</h4>
        {more ? <h4>{`UV Index: ${weatherData.daily[7].uvi}`}</h4> : null}
        {more ? <h4>{`Humidity: ${weatherData.daily[7].humidity}`}</h4> : null}
        {more ? <h4>{`Dewpoint: ${weatherData.daily[7].dew_point}° F`}</h4> : null}
        {more ? <h4>{`Cloud Coverage: ${weatherData.daily[7].clouds}%`}</h4> : null}
      </div> : null}
        {more ? <button className='more-less' onClick={() => setMore(false)}>Show Less</button> : <button className='more-less' onClick={() => setMore(true)}>Show More</button>}
        
      </div>
      
      <div>
        {day < 7 ? <ArrowForwardIosIcon onClick={addDay}/> : null}
      </div>
    </div>
  )
}

export default DailyForcastSmall