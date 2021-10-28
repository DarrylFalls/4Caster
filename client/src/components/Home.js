import Login from "./Login"
import Welcome from "./Welcome"



const Home = ({setLoggedIn, loggedIn, user, setUser, userData, setUserData, setFavorites}) => {
  return (
    <div>
      <div><h1>Welcome to 4Caster</h1></div>
      <div>
        {loggedIn ? <Welcome user={user} setUser={setUser} /> : <Login setLoggedIn={setLoggedIn} setUser={setUser} setUserData={setUserData} setFavorites={setFavorites} />}
      </div>
    </div>
  )
}

export default Home