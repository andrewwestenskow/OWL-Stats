import React, { Component } from 'react'
import axios from 'axios'


class Compare extends Component {

  state={
    player1: {},
    player2: {}
  }

  componentDidMount(){

    let {player1, player2} = this.props

    axios.get(`/api/prostats?name=${player2}`).then(res => {
      this.setState({
        player2: res.data
      })
    }).catch(err =>{
      console.log(`Error: ${err}`)
    })

    axios.get(`/api/individualstats?name=${player1}`).then(res => {
      this.setState({
        player1: res.data
      })
    }).catch(err =>{
      console.log(`Error: ${err}`)
    })
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