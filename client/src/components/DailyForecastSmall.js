import { useState } from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './DailyForecastSmall.css'

const DailyForcastSmall = ({ weatherData }) => {
  const [day, setDay] = useState(0)
  const addDay = () => {
    setDay(day+1)
  }
  const minusDay = () => {
    setDay(day-1)
  }
  const getDay = (dt) => {
    const a = new Date(dt * 1000);
    const year = a.getFullYear();
    const month = a.getMonth()+1;
    const day = a.getDate();

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
            <h1>{getDay(weatherData.daily[0].dt)}</h1>
            <img src={`http://openweathermap.org/img/wn/${weatherData.daily[0].weather[0].icon}.png`} className='small-forecast-icon'/>
            <h4>{`Min: ${weatherData.daily[0].temp.min}`}</h4>
            <h4>{`Max: ${weatherData.daily[0].temp.max}`}</h4>
          </div>
          : null}
        {weatherData && day === 1 ? <h1>{getDay(weatherData.daily[1].dt)}</h1> : null}
        {weatherData && day === 2 ? <h1>{getDay(weatherData.daily[2].dt)}</h1> : null}
        {weatherData && day === 3 ? <h1>{getDay(weatherData.daily[3].dt)}</h1> : null}
        {weatherData && day === 4 ? <h1>{getDay(weatherData.daily[4].dt)}</h1> : null}
        {weatherData && day === 5 ? <h1>{getDay(weatherData.daily[5].dt)}</h1> : null}
        {weatherData && day === 6 ? <h1>{getDay(weatherData.daily[6].dt)}</h1> : null}
        {weatherData && day === 7 ? <h1>{getDay(weatherData.daily[7].dt)}</h1> : null}
      </div>
      
      <div>
        {day < 7 ? <ArrowForwardIosIcon onClick={addDay}/> : null}
      </div>
    </div>
  )
}

export default DailyForcastSmall