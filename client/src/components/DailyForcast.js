

const DailyForcast = ({weatherData}) => {
  return (
    <div>
      {weatherData ? weatherData.daily.map((day) => (
        <div className='day'>

        </div>
      )) : null}
    </div>
  )
}


export default DailyForcast