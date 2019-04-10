import React, { Component } from 'react'
import AddNew from './AddNew'

class IndividualStats extends Component {

  state = {
    player: '',
    edit: false
  }

  whoToDisplay = (player) => {
    this.setState({
      player: player
    })
  }

  editing = () => {
    this.setState({
      edit: true
    })
  }

  render() {

    let getOptions = this.props.stats.map(player => {
      return <option value={player.name} key={player.id}>{player.name}</option>
    })

    let whoToShow = this.props.stats.filter(player => {
      if (!this.state.player){
        return player
      } else {
        return this.state.player === player.name
      }
      
      
    })

    let showStats = whoToShow.map(player => {
      return<tbody key={player.name}>

      <tr>
        <td>{player.name}</td>
        <td>{(player.eliminations_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
        <td>{(player.hero_damage_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
        <td>{(player.healing_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
        <td>{(player.deaths_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
        <td><button onClick={this.editing}>Edit</button></td>
      </tr>
    </tbody>

    })

    return (
      <div>
        <h1>Player Stats</h1>
        <select name="" id="" onChange={e => this.whoToDisplay(e.target.value)}>
          <option value="">All Players</option>
          {getOptions}
        </select>
        <button>Add New Player</button>

        <div className="Stats">
        <table>
            <thead>
            <tr>
              <td>Name</td>
              <td>Eliminations per 10m</td>
              <td>Hero Damage per 10m</td>
              <td>Healing per 10m</td>
              <td>Deaths per 10m</td>
            </tr>
            </thead>
            {showStats}
          </table>
        </div>
      </div>
    )
  }
}

export default IndividualStats