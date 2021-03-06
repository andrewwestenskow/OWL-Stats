import React, { Component } from 'react'
import axios from 'axios'
import ShowCompare from './ShowCompare'


class Compare extends Component {

  state = {
    player1: {},
    player2: {},
    player2Stats: {}
  }

  // Fetches detailed player stats 

  componentDidMount() {

    let { player1, player2 } = this.props

    axios.get(`https://api.overwatchleague.com/players/${player2}?locale=en-us&season=2019&stage_id=regular_season&expand=stats,stat.ranks`).then(res => {
      this.setState({
        player2: res.data.data.player,
        player2Stats: res.data.data.stats.all
      })
    }).catch(err => {
      console.log(`Error: ${err}`)
    })

    axios.get(`/api/individualstats?name=${player1}`).then(res => {
      this.setState({
        player1: res.data[0]
      })
    }).catch(err => {
      console.log(`Error: ${err}`)
    })
  }

  render() {

    let { player1, player2, player2Stats } = this.state

    return (
      <div className='CompareWindow'>
      
        <h1 className='CompareHeader'>HOW DO YOU STACK UP?</h1>
        

        {/* Player 1 stats */}
        <div className="CompareStats">
          <div className="Player1">
            <table className='Player1Table'>
              <tbody>
                <tr>
                  <td className='CompareTableHead'>Name</td>
                  <td>{player1.name}</td>
                </tr>
                <tr>
                  <td className='CompareTableHead'>Eliminations per 10m</td>
                  <td>{player1.eliminations_avg_per_10m}</td>
                </tr>
                <tr>
                  <td className='CompareTableHead'>Hero Damage per 10m</td>
                  <td>{Number(player1.hero_damage_avg_per_10m).toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                </tr>
                <tr>
                  <td className='CompareTableHead'>Healing per 10m</td>
                  <td>{Number(player1.healing_avg_per_10m).toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                </tr>
                <tr>
                  <td className='CompareTableHead'>Deaths per 10m</td>
                  <td>{player1.deaths_avg_per_10m}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Shows stat comparison */}
          <ShowCompare player1={player1} 
          player2={this.state.player2Stats} showCompare={this.props.showCompare} />

          {/* Shows Player 2 stats */}
          <div className="Player2">
            <table className='Player2Table'>
              <tbody>
                <tr>
                  <td>{player2.name}</td>
                  <td className='CompareTableHead'>Name</td>
                </tr>
                <tr>
                  <td>{Number(player2Stats.eliminations_avg_per_10m).toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                  <td className='CompareTableHead'>Eliminations per 10m</td>
                </tr>
                <tr>
                  <td>{Number(player2Stats.hero_damage_avg_per_10m).toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                  <td className='CompareTableHead'>Hero Damage per 10m</td>
                </tr>
                <tr>
                  <td>{Number(player2Stats.healing_avg_per_10m).toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                  <td className='CompareTableHead'>Healing per 10m</td>
                </tr>
                <tr>
                  <td>{Number(player2Stats.deaths_avg_per_10m).toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                  <td className='CompareTableHead'>Deaths per 10m</td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>

        
      </div>
    )
  }
}

export default Compare