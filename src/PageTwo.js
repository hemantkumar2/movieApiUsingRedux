import React, { Component } from 'react'

export default class PageTwo extends Component {
  render() {
    return (
      <div>
        <h1>PageTwo</h1>
        <h4>This is all about doing routing and passing: {this.props.name}</h4>
      </div>
    )
  }
}
