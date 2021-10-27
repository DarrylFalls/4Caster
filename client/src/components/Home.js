import Login from "./Login"
import Welcome from "./Welcome"



const Home = ({setLoggedIn, loggedIn, user, setUser, userData, setUserData}) => {
  return (
    <div>
      <div><h1>Welcome to 4Caster</h1></div>
      <div>
        {loggedIn ? <Welcome /> : <Login setLoggedIn={setLoggedIn}/>}
      </div>
    </div>
  )
}

export default Home