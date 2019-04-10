import React, { Component } from 'react'


class ProStats extends Component {


  render() {


    let showStats = this.props.stats.map(player => {
      return <tbody key={player.name}>

        <tr>
          <td>{player.name}</td>
          <td>{(player.eliminations_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
          <td>{(player.hero_damage_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
          <td>{(player.healing_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
          <td>{(player.deaths_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
        </tr>
      </tbody>
    })

    return (
      <div>
        <h1>Pro Stats</h1>
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

export default ProStats
