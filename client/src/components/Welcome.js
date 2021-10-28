import './Welcome.css'

const Welcome = ({user}) => {
  return (
    <div>
      <h2>Hi there, {user}!</h2>
      <h3>Use the search bar to get the weather for any city.</h3>
    </div>
  )
}


export default Welcome