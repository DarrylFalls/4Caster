import { useState, useEffect } from "react"
import './Navbar.css'
import axios from "axios";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Redirect, Link } from "react-router-dom";

const Navbar = ({setLocation, location, loggedIn, setOnHomePage }) => {
  const [input, setInput] = useState('')
  const [titleSpace, setTitleSpace] = useState('')
  // const [redirect, setRedirect] = useState(false)

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
    // setRedirect(!redirect)
    // setRedirect(!redirect)
  }

  useEffect(() => {
    getTitleSpace()
  }, [loggedIn])

  // if (redirect === true) {
  //   return <Redirect to={`/current-weather/place`}/>
  // }

  return (
    <div className='navbar'>
      <IconButton
        size="large"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        classname='menu-button-div'
        >
        <MenuIcon className='menu-button'/>
      </IconButton>
      <div className='title' style={{ margin: titleSpace }}>
        <Link to='/' onClick={() => setOnHomePage(true)}>
        <h1>4Caster</h1>
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