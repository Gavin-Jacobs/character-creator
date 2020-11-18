import React from 'react'
import DnD from './DnD.jsx';
class App extends React.Component {
  state = {
   'gretting': 'hello'
  }
  render () {
    return (
      <>
      <h1>{this.state.gretting}</h1>
      <DnD />
      </>
    )
  }
}

export default App