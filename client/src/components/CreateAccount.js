import axios from "axios"
import { async } from "q"
import { useState } from "react"
import { Redirect } from "react-router-dom"
import './CreateAccount.css'

const CreateAccount = ({setUser, setUserData, setLoggedIn, setFavorites}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const getData = async () => {
    const res = await axios.get('https://api.airtable.com/v0/app4ZMuiUaRsyIY94/Table%201?api_key=key3kKNmypHQOUSxM')
    setUserData(res.data.records.find((record) => record.fields.username === username))
  }

  const newUser = async () => {
    let newUserData = {
      records: [{
        fields: {
          username ,
          password ,
          favorites: '[]',
        }
      }
    ]
    }
    await axios.post('https://api.airtable.com/v0/app4ZMuiUaRsyIY94/Table%201?api_key=key3kKNmypHQOUSxM', newUserData)
    getData()
    setUser(username)
    setFavorites([])
  }


  const checkUsername = async () => {
    const res = await axios.get('https://api.airtable.com/v0/app4ZMuiUaRsyIY94/Table%201?api_key=key3kKNmypHQOUSxM')
    const nameCheck = res.data.records.find((record) => record.fields.username === username)
    setTimeout(() => {
      if (nameCheck === undefined) {
        newUser()
        alert('Congratulations! You now have an account with 4Caster.')
        setUser(username)
        setLoggedIn(true)
      } else {
        alert('Username is already taken. Please choose a new username.')
      }
    }, 100)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    checkUsername()
    setRedirect(true)
  }

  if (redirect === true) {
    return <Redirect to='/'/>
  }

  return (
    <div className='create-account-div'>
      <h1>Create New Account</h1>
      <form onSubmit={handleSubmit} className='create-account-form'>
        <label>Username: </label>
        <input value={username} onChange={(ev) => setUsername(ev.target.value)}></input>
        <br/>
        <label>Password: </label>
        <input value={password} onChange={(ev) => setPassword(ev.target.value)}></input>
        <br />
        <input type='submit' value='Create Account' />
      </form>
    </div>
  )
}

export default CreateAccount