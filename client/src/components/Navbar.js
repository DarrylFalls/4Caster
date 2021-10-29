import { useState, useEffect } from "react"
import './Navbar.css'
import axios from "axios";
import { Link } from "react-router-dom";
import SwipeableTemporaryDrawer from "./SwipableDrawer";

const Navbar = ({setLocation, location, loggedIn, setLoggedIn, setOnHomePage, favorites, userData, user, setUser }) => {
  const [input, setInput] = useState('')

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const res = await axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=bTdBubAIGCp23LC0DL0nfCNW3R4HzIQj&location=${input}`)
    setLocation(res.data.results[0].locations[0])
    setInput('');
    setOnHomePage(false)
  }

  useEffect(() => {
    setInput('')
  }, [location])


  return (
    <div className='navbar'>
      
        <SwipeableTemporaryDrawer className='menu-button' setOnHomePage={setOnHomePage} user={user} setUser={setUser} favorites={favorites} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setOnHomePage={setOnHomePage} setLocation={setLocation} userData={userData}/>
      
      <div className='title-div'>
        <Link to='/' className='title-link' onClick={() => setOnHomePage(true)}>
        <h1 className='title'>4Caster</h1>
        </Link>
      </div>
      <div className='search'>
        {loggedIn ?
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Search by city' value={input} onChange={(ev) => setInput(ev.target.value)} />
            <input type='submit' value='Search' />
          </form>
        : null}
      </div>
    </div>
  )
}

export default Navbar