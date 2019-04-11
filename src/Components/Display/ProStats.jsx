import React, { Component } from 'react'


class ProStats extends Component {


  render() {

    //Maps over all pro players and places them in a table
    let showStats = this.props.stats.map(player => {
      return <tbody key={player.name}>

        <tr>
          <td className='StatsCell'>{player.name}</td>
          <td className='StatsCell'>{(player.eliminations_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
          <td className='StatsCell'>{(player.hero_damage_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
          <td className='StatsCell'>{(player.healing_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
          <td className='StatsCell'>{(player.deaths_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
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
              <td className='HeaderCell'>Name</td>
              <td className='HeaderCell'>Eliminations per 10m</td>
              <td className='HeaderCell'>Hero Damage per 10m</td>
              <td className='HeaderCell'>Healing per 10m</td>
              <td className='HeaderCell'>Deaths per 10m</td>
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
