import axios from "axios"
import { useState } from "react"

const CreateAccount = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const newUser = async () => {
    let newUserData = {
      return: [{
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

  const handleSubmit = (ev) => {
    ev.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input value={username} onChange={(ev) => setUsername(ev.target.value)}></input>
        <br/>
        <label>Password: </label>
        <input value={password} onChange={(ev) => setPassword(ev.target.value)}></input>
        <br/>
      </form>
    </div>
  )
}

export default CreateAccount