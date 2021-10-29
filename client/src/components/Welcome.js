import './Welcome.css'

const Welcome = ({user}) => {
  return (
    <div className='welcom-div'>
      <h2>Hi there, {user}!</h2>
      <h3 className='message'>Use the search bar to get the weather for any city.</h3>
    </div>
  )
}


export default Welcome