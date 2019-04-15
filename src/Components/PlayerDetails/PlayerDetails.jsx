import React, {Component} from 'react'
import axios from 'axios'
import TopSection from './TopSection'
import MainBody from './MainBody'


class PlayerDetails extends Component {

  state = {
    player: [],
    statRanks: [],
    stats: [],
    team: [],
    attributes: [],
    season: 2019
  }

  componentDidMount() {
    axios.get(`https://api.overwatchleague.com/players/${this.props.playerToShow}?locale=en-us&season=${this.state.season}&stage_id=regular_season&expand=stats,stat.ranks`).then(res => {
      let showPlayer = res.data.data
      
      
      this.setState({
        player: showPlayer.player,
        statRanks: showPlayer.statRanks,
        stats: showPlayer.stats.all,
        team: showPlayer.player.teams[0].team,
        attributes: showPlayer.player.attributes
      })
    })
  }

  seasonSwitch = (season) => {
    this.setState({
      season: season
    })

    setTimeout(function(){this.updateStats(season)}.bind(this), 50)
    
  }

  updateStats = (season) => {
    axios.get(`https://api.overwatchleague.com/players/${this.props.playerToShow}?locale=en-us&season=${this.state.season}&stage_id=regular_season&expand=stats,stat.ranks`).then(res => {
      let showSeason = res.data.data
      
      
      this.setState({
        player: showSeason.player,
        statRanks: showSeason.statRanks,
        stats: showSeason.stats.all,
        heroStats: showSeason.stats.heroes,
        team: showSeason.player.teams[0].team,
        attributes: showSeason.player.attributes
      })
    })
  }

  
  
  render(){
    
    

    const backStyle = {
      backgroundColor: `#${this.state.team.primaryColor}`
    }

    return(
    <div className='PlayerStatsHolder' style={backStyle}>
      <TopSection player={this.state.player} team={this.state.team}/>
      <button onClick={() => this.props.showFalse()} >Go Back</button>
      <MainBody player={this.state.player} 
      team ={this.state.team} 
      attributes={this.state.attributes} 
      stats={this.state.stats} 
      heroStats={this.state.heroStats}
      statRanks={this.state.statRanks}
      seasonSwitch={this.seasonSwitch}
      season={this.state.season}
      playerToShow={this.props.playerToShow}/>


      
    </div>
    )
  }
}

export default PlayerDetails