import React, { Component } from 'react'

class App extends Component {
  render() {
    let exclamation = '!'
    return (
      <div>
        <h1>Olá {this.props.name}{exclamation}</h1>
      </div>
    )
  }
}

export default App
