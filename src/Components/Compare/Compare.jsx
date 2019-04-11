import React, { Component } from 'react'
import axios from 'axios'


class Compare extends Component {

  state={
    player1: {},
    player2: {}
  }

  componentDidMount() {
    let {player1, player2} = this.props

  }

  render() {
    return (
      <div className='CompareWindow'>
        <button onClick={() => this.props.showCompare()}>Go Back</button>
        Hello</div>
    )
  }
}

export default Compare