import './DailyForecast.css'

const DailyForecast = ({ weatherData }) => {
  const getDay = (dt) => {
    const a = new Date(dt * 1000);
    // const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = a.getMonth()+1;
    const day = a.getDate();

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return(weekday[new Date(`${month}/${day}/${year}`).getDay()])
    
    // console.log(`${month}/${date}/${year}`)
  }
  // getDay()

  if (weatherData) {
    console.log(weatherData.daily)
  }
  return (
    <div className='forecast'>
      {weatherData ? weatherData.daily.map((day, idx) => (
        <div className='day' key={idx}>
          <h2>{getDay(day.dt)}</h2>
          <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} className='small-weather-icon' alt='icon'/>
          <h4>{`Min: ${day.temp.min}° F`}</h4>
          <h4>{`Max: ${day.temp.max}° F`}</h4>
        </div>
      )) : null}
    </div>
  )
}


export default DailyForecast