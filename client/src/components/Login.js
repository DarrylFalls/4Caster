import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import './Login.css'


const Login = ({ setLoggedIn, setUser, setUserData, setFavorites }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const checkUserInfo = async () => {
    const res = await axios.get('https://api.airtable.com/v0/app4ZMuiUaRsyIY94/Table%201?api_key=key3kKNmypHQOUSxM')
    console.log(res.data.records)
    let account = res.data.records.find((record) => record.fields.username === username)
    if (account === undefined) {
      alert('Sorry. That username does not exist')
    } else {
      if (account.fields.password === password) {
        setUserData(account)
        setLoggedIn(true)
        setUser(account.fields.username)
        setFavorites(account.fields.favorites)
      } else {
        alert('Sorry. That password is incorrect.')
      }
    }
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    checkUserInfo()
  }

  const guestLogin = () => {
    setLoggedIn(true)
    setUser('Guest')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input value={username} onChange={(ev) => setUsername(ev.target.value)}></input>
        <br />
        <label>Password: </label>
        <input value={password} onChange={(ev) => setPassword(ev.target.value)}></input>
        <br />
        <input type='submit' value='Login' />
      </form>
      <p>If you are new to 4Caster, you can <Link to="/create-account">create an account</Link> or <u className='guest-link' onClick={guestLogin}>continue as a guest</u>.</p>
    </div>
  )
}

export default Login