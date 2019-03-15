import React, { Component } from 'react'
import functionsList from './data.json'
import './App.css'

export default class App extends Component {
  callFunc = () => {
    fetch('/.netlify/functions/12-fetch-external-api', {
      method: 'GET'
    })
    .then((resp) => resp.json())
    .then((d) => {
      console.log('d', d)
    }).catch((e) => {
      console.log('e', e)
    })
  }
  renderFunctions = () => {
    return functionsList.map((fn) => {
      return (
        <div>
          <a href={`/.netlify/functions/${fn}`}>{fn}</a>
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        <div>
          <h1>GET</h1>
          {this.renderFunctions()}
        </div>
        <div>
        <h1>POST</h1>
          {this.renderFunctions()}
        </div>
        <button onClick={this.callFunc}>click</button>

      </div>
    )
  }
}
