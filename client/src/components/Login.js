import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import './Login.css'

const Login = ({setLoggedIn}) => {
  const getUserInfo = async () => {
    const res = await axios.get('https://api.airtable.com/v0/app4ZMuiUaRsyIY94/Table%201?api_key=key3kKNmypHQOUSxM')
    // setUser(res.data.records)
    console.log(res.data.records)
  }
  const handleSubmit = (ev) => {
    ev.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input></input>
        <br />
        <label>Password: </label>
        <input></input>
        <br/>
      </form>
      <p>If you are new to 4Caster, you can <Link to="/create-account">create an account</Link> or <u className='guest-link' onClick={() => setLoggedIn(true)} display='inline'>continue as a guest</u>.</p>
    </div>
  )
}

export default Login