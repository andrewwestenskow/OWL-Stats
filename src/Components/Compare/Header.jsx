import React, { Component } from 'react'

class Header extends Component {


  handleChange = (e) => {
    this.props.handleChange(e)
  }

  handleCompare = () => {
    this.props.handleCompare()
  }


  render() {

    let proNames = this.props.proStats.map(player =>{
      return <option key={player.name} value={player.name}>{player.name}</option>
    })

    let playerNames = this.props.individualStats.map(player =>{
      return <option key={player.name} value={player.name}>{player.name}</option>
    })

    return (
      <div>
        <header className='Header'>
          <h1 className='WelcomeText'>Overwatch Stats Comparison</h1>
          <div className='CompareSelects'>
            <select onChange={this.handleChange} name="player1" id="" className='Compare'>
              <option value="">Player 1</option>
              {playerNames}
            </select>
            <select onChange={this.handleChange} name="player2" id="" className='Compare'>
              <option value="">Player 2</option>
              {proNames}
            </select>
            <button onClick={this.handleCompare} className='GreenButton'>Compare!</button>
          </div>

        </header>
      </div>
    )
  }
}

export default Header