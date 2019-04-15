import React, { Component } from 'react'


class ProStats extends Component {


  render() {

    //Maps over all pro players and places them in a table
    let showStats = this.props.stats.map(player => {
      return <tr key={player.playerId}>
        <td id={player.playerId} style={{cursor: 'pointer'}} className='StatsCell' onClick={e => this.props.showDetailed(e.target.id)}>{player.name}</td>
        <td className='StatsCell'>{(player.eliminations_avg_per_10m).toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
        <td className='StatsCell'>{(player.hero_damage_avg_per_10m).toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
        <td className='StatsCell'>{(player.healing_avg_per_10m).toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
        <td className='StatsCell'>{(player.deaths_avg_per_10m).toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
      </tr>

    })

    return (
      <div>
        <h1 className='Heading'>Pro Stats</h1>
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
            <tbody>
              {showStats}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ProStats
