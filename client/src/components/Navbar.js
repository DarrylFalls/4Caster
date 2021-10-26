import { useState } from "react"
import './Navbar.css'
import axios from "axios";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({setLocation, location }) => {
  const [input, setInput] = useState('')
  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const res = await axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=bTdBubAIGCp23LC0DL0nfCNW3R4HzIQj&location=${input}`)
    setLocation(res.data.results[0].locations[0])
    console.log(res.data)
    setInput('')
  }
  return (
    <div className='navbar'>
      <MenuIcon className='menu-button' />
      <div className='title'>
        <h1>4Caster</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Search' value={input} onChange={(ev) => setInput(ev.target.value)} />
          <input type='submit' value='Search' />
        </form>
      </div>
    </div>
  )
}

export default Navbar