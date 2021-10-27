import Login from "./Login"



const Home = ({setLoggedIn, loggedIn, user, setUser, userData, setUserData}) => {
  return (
    <div>
      <div><h1>Welcome to 4Caster</h1></div>
      <div>
        {loggedIn ? <Welcome /> : <Login />}
      </div>
    </div>
  )
}

export default Home