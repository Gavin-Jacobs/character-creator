import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
      <>
        <h1>Make your character</h1>

        <Link to='/maker'><button>input new cracter</button></Link>
        <Link to='/creator'><button>create new character</button></Link>
        <Link to='/display'><button>retreve your character</button></Link>
      </>
    )
  }
  export default Home