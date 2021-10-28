import axios from "axios"
import { useState } from "react"
import { Redirect } from "react-router-dom"

const CreateAccount = ({setUser, setUserData, setLoggedIn}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const newUser = async () => {
    let newUserData = {
      records: [{
        fields: {
          username ,
          password ,
          favorites: [],
        }
      }
    ]
    }
    await axios.post('https://api.airtable.com/v0/app4ZMuiUaRsyIY94/Table%201?api_key=key3kKNmypHQOUSxM', newUserData)
  }
  const checkUsername = async () => {
    const res = await axios.get('https://api.airtable.com/v0/app4ZMuiUaRsyIY94/Table%201?api_key=key3kKNmypHQOUSxM')
    const nameCheck = res.data.records.find((record) => record.fields.username === username)
    console.log(nameCheck)
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
    <div>
      <form onSubmit={handleSubmit}>
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