import './DailyForcast.css'

const DailyForcast = ({ weatherData }) => {
  // const getDay = (dt) => {
  //   const a = new Date(dt * 1000);
  //   const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  //   const year = a.getFullYear();
  //   const month = months[a.getMonth()];
  //   const date = a.getDate();
  //   console.log(month)
  //   return(`${date}/${month}/${year}`)
  // }

  if (weatherData) {
    console.log(weatherData.daily)
  }
  return (
    <div className='forecast'>
      {weatherData ? weatherData.daily.map((day, idx) => (
        <div className='day' key={idx}>
          <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} className='small-weather-icon' />
        </div>
      )) : null}
    </div>
  )
}


export default DailyForcast