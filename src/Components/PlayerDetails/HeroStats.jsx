import React, {Component} from 'react'
import axios from 'axios'


class HeroStats extends Component {

  state = {
    heroStats: [],
    color: ''
  }

  componentDidMount() {
    axios.get(`https://api.overwatchleague.com/players/${this.props.playerToShow}?locale=en-us&season=${this.props.season}&stage_id=regular_season&expand=stats,stat.ranks`).then(res => {
      let showPlayer = res.data.data
      
      
      this.setState({
        heroStats: showPlayer.stats.heroes,
      })
    })

    axios.get(`https://api.overwatchleague.com/players/${this.props.playerToShow}?locale=en-us&season=${this.props.season}&stage_id=regular_season&expand=stats,stat.ranks`).then(res => {
      let teamInfo = res.data.data.player.teams[0].team
      console.log(teamInfo.secondaryColor)
      this.setState({
        color: teamInfo.secondaryColor
      })
    })


  
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.season !== prevProps.season) {
      axios.get(`https://api.overwatchleague.com/players/${this.props.playerToShow}?locale=en-us&season=${this.props.season}&stage_id=regular_season&expand=stats,stat.ranks`).then(res => {
      let showPlayer = res.data.data
      
      
      this.setState({
        heroStats: showPlayer.stats.heroes,
      })
    })

    axios.get(`https://api.overwatchleague.com/players/${this.props.playerToShow}?locale=en-us&season=${this.props.season}&stage_id=regular_season&expand=stats,stat.ranks`).then(res => {
      let teamInfo = res.data.data.player.teams[0].team
      this.setState({
        color: teamInfo.secondaryColor
      })
    })
    }
  }

  showDetails = (hero) => {
    
  }


  render(){ 
    
    let showStats = this.state.heroStats.sort((a,b) => (a.stats.time_played_total < b.stats.time_played_total) ? 1 : ((b.stats.time_played_total < a.stats.time_played_total) ? -1 : 0)).map(hero => {
      return <div key={hero.name} value={hero.name} 
      className='HeroStats' 
      onClick={e => this.showDetails(hero.name)}>
      <div 
      className='time-played-percentage'
      style={{width: `${(hero.stats.time_played_total / this.props.totalTime) * 100}%`, background: `#${this.state.color}`}}
      >

      </div>
      <h2>{hero.name}</h2> 
      <h3>{`${((hero.stats.time_played_total)/60/60).toLocaleString()} hours`}</h3>
      </div>
    })

    return(
      <div>
        {showStats}

      </div>
    )
  }
}

export default HeroStats