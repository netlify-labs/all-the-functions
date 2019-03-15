import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  callFunc = () => {
    fetch('/.netlify/functions/with-modules', {
      method: 'GET'
    })
    .then((resp) => resp.json())
    .then((d) => {
      console.log('d', d)
    }).catch((e) => {
      console.log('e', e)
    })
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <a href="/.netlify/functions/with-redirect">
            Function with redirect
          </a>
          <a href="/.netlify/functions/set-cookie">
            Set cookie
          </a>
          <button onClick={this.callFunc}>click</button>
        </header>
      </div>
    )
  }
}
