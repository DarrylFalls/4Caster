import axios from "axios"
import { useState } from "react"

const CreateAccount = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    newUser()
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