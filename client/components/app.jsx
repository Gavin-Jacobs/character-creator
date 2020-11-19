import React from 'react'
import DnD from './DnD.jsx';
import Maker from './CharacterInput'
import { Route } from 'react-router-dom'
import Home from './Home'

class App extends React.Component {
  state = {
   'gretting': 'hello'
  }
  render () {
    return (
      <>
      <Route path='/maker' component={Maker} />
      <Route exact path='/' component={Home} />
      <Route path='/creator' component={DnD} />
      
      </>
    )
  }
}

export default App