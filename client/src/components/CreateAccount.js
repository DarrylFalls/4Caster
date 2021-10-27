import axios from "axios"

const CreateAccount = () => {

  const newUser = async () => {
    let newUserData = {
      
    }
    await axios.post('https://api.airtable.com/v0/app4ZMuiUaRsyIY94/Table%201?api_key=key3kKNmypHQOUSxM', newUserData)
  }
  return (
    <div>
      <form>
        <label></label>
        <input></input>
      </form>
    </div>
  )
}

export default CreateAccount