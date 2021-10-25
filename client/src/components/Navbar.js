import { useState } from "react"

const Navbar = ({ }) => {
  const [input, setInput] = useState('')
  return (
    <div className='navbar'>
      <button>
        Menu
      </button>
      <div>
        <form>
          <input type='text' placeHolder='Search' value={input} onChange={(ev) => setInput(ev.target.value)} />
          <input type='submit' value='Search' />
        </form>
      </div>
    </div>
  )
}

export default Navbar