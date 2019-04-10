import React, { Component } from 'react'

class IndividualStats extends Component {

  state = {
    player: ''
  }

  whoToDisplay = (player) => {
    this.setState({
      player: player
    })
  }

  render() {

    let getOptions = this.props.stats.map(player => {
      return <option value={player.name} key={player.id}>{player.name}</option>
    })

    let whoToShow = this.props.stats.filter(player => {
      return this.state.player === player.name
    })

    let showStats = whoToShow.map(player => {
      return <tbody key={player.name}>

        <tr>
          <td>Name</td>
          <td>{player.name}</td>
        </tr>
        <tr>
          <td>Eliminations per 10</td>
          <td>{player.eliminations_avg_per_10m}</td>
        </tr>
        <tr>
          <td>Hero Damage per 10</td>
          <td>{player.hero_damage_avg_per_10m}</td>
        </tr>
        <tr>
          <td>Healing per 10</td>
          <td>{player.healing_avg_per_10m}</td>
        </tr>
        <tr>
          <td>Deaths per 10</td>
          <td>{player.deaths_avg_per_10m}</td>
        </tr>
      </tbody>
    })

    return (
      <div>
        <select name="" id="" onChange={e => this.whoToDisplay(e.target.value)}>
          <option value="">Select Player</option>
          {getOptions}
        </select>

        <div className="Stats">
          <table>
            <thead>
              
            </thead>
              {showStats}
          </table>
        </div>
      </div>
    )
  }
}

export default IndividualStats