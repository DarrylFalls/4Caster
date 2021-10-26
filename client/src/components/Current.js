

const Current = ({locationData, weatherData}) => {
  return (
    <div>
      <div>
        <h1>{locationData.adminArea5}, {locationData.adminArea1 === 'US' ? `${locationData.adminArea3}, ${locationData.adminArea1}` : `${locationData.adminArea1}`}</h1>
      </div>
      <div>
        <h3>{weatherData.current.weather[0].description}</h3>
      </div>
      <div>
        <img src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}/>
      </div>
    </div>
  )
}

export default Current