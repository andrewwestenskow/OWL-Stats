import React, { Component } from 'react'
import axios from 'axios';

class Header extends Component {

  state={
    individualStats: [],
    proStats: [],
  }

  componentDidMount(){

    //Gets both pro and individual stats at component mount
    axios.get('/api/prostats').then(res => {
      this.setState({
        proStats: res.data
      })
    }).catch(err =>{
      console.log(`Error: ${err}`)
    })

    axios.get('/api/individualstats').then(res => {
      this.setState({
        individualStats: res.data
      })
    }).catch(err =>{
      console.log(`Error: ${err}`)
    })
  }

  handleChange = (e) => {
    this.props.handleChange(e)
  }


  render() {

    let proNames = this.state.proStats.map(player =>{
      return <option key={player.name} value={player.name}>{player.name}</option>
    })

    let playerNames = this.state.individualStats.map(player =>{
      return <option key={player.name} value={player.name}>{player.name}</option>
    })

    return (
      <div>
        <header className='Header'>
          <h1 className='WelcomeText'>Overwatch Stats Compare</h1>
          <div className='CompareSelects'>
            <select onChange={this.handleChange} name="player1" id="" className='Compare'>
              <option value="">Player 1</option>
              {playerNames}
            </select>
            <select onChange={this.handleChange} name="player2" id="" className='Compare'>
              <option value="">Player 2</option>
              {proNames}
            </select>
            <button className='CompareButton'>Compare!</button>
          </div>

        </header>
      </div>
    )
  }
}

export default Header