import Login from "./Login"
import Welcome from "./Welcome"
import './Home.css'



const Home = ({setLoggedIn, loggedIn, user, setUser, userData, setUserData, setFavorites}) => {
  return (
    <div className='home-display'>
      <div><h1>Welcome to 4Caster</h1></div>
      <div>
        {loggedIn ? <Welcome user={user} setUser={setUser} /> : <Login setLoggedIn={setLoggedIn} setUser={setUser} setUserData={setUserData} setFavorites={setFavorites} />}
      </div>
    </div>
  )
}

export default Home