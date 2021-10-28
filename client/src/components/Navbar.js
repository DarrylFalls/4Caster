import { useState, useEffect } from "react"
import './Navbar.css'
import axios from "axios";
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import SwipeableTemporaryDrawer from "./SwipableDrawer";

const Navbar = ({setLocation, location, loggedIn, setOnHomePage, favorites, userData, user }) => {
  const [input, setInput] = useState('')
  const [titleSpace, setTitleSpace] = useState('')

  const getTitleSpace = () => {
    if (loggedIn === true) {
      setTitleSpace('-10vw')
    } else {
      setTitleSpace('0')
    }
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const res = await axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=bTdBubAIGCp23LC0DL0nfCNW3R4HzIQj&location=${input}`)
    setLocation(res.data.results[0].locations[0])
    console.log(res.data)
    setInput('');
    setOnHomePage(false)
  }

  useEffect(() => {
    getTitleSpace()
  }, [loggedIn])

  useEffect(() => {
    setInput('')
  }, [location])


  return (
    <div className='navbar'>
      
        <SwipeableTemporaryDrawer className='menu-button' user={user} favorites={favorites} loggedIn={loggedIn} setOnHomePage={setOnHomePage} setLocation={setLocation} userData={userData}/>
      
      <div style={{ margin: titleSpace }}>
        <Link to='/' className='title-link' onClick={() => setOnHomePage(true)}>
        <h1 className='title'>4Caster</h1>
        </Link>
      </div>
      <div>
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