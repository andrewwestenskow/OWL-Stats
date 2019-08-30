import React, {Component} from 'react'
import HeroStats from './HeroStats';

class MainBody extends Component {

  

  seasonSwitch = (e) => {

    this.props.seasonSwitch(e)
  }

  render(){

  
    return(
      <div className="MainBody">
        <div className="PictureMainStats">
          <div className="HeadshotStats">
            <img className='PlayerImage' 
            src={this.props.player.headshot} 
            alt={this.props.player.name}/>
            <div className="MainStats">
              <div className="StatSelector">
                <span>Select Season:  </span> 
                <select name="SeasonSelector" onChange={e => this.seasonSwitch(e.target.value)}>
                  <option value="2019">2019 Regular Season</option>
                  <option value="2018">2018 Regular Season</option>
                </select>
              </div>
              <div className="DisplayStats">
              {/* HERO DAMAGE  */}
                <p><strong> Hero Damage per 10m:</strong> {Number(this.props.stats.hero_damage_avg_per_10m).toLocaleString()} | <strong>rank: </strong>{this.props.statRanks.hero_damage_avg_per_10m} </p>
              {/* ELIMINATIONS  */}
                <p><strong> Eliminations per 10m:</strong> {Number(this.props.stats.eliminations_avg_per_10m).toLocaleString()} | <strong>rank: </strong>{this.props.statRanks.eliminations_avg_per_10m} </p>
              {/* FINAL BLOWS */}
                <p><strong> Final Blows per 10m:</strong> {Number(this.props.stats.final_blows_avg_per_10m).toLocaleString()} | <strong>rank: </strong>{this.props.statRanks.final_blows_avg_per_10m} </p>
              {/* HEALING */}
                <p><strong> Healing per 10m:</strong> {Number(this.props.stats.healing_avg_per_10m).toLocaleString()} | <strong>rank: </strong>{this.props.statRanks.healing_avg_per_10m} </p>
              {/* DEATHS */}
                <p><strong> Deaths per 10m:</strong> {Number(this.props.stats.deaths_avg_per_10m).toLocaleString()} | <strong>rank: </strong>{this.props.statRanks.deaths_avg_per_10m} </p>
              {/* ULTIMATES EARNED */}
                <p><strong> Ultimates Earned per 10m:</strong> {Number(this.props.stats.ultimates_earned_avg_per_10m).toLocaleString()} | <strong>rank: </strong>{this.props.statRanks.ultimates_earned_avg_per_10m} </p>
              {/* TIME PLAYED */}
                <p><strong> Total Time Played:</strong> {(Number(this.props.stats.time_played_total)/60/60).toLocaleString()} Hours | </p>

              </div>
            </div>
          </div>
          <div className="TeamInfo">
            <h2>{this.props.team.name}</h2>
            <h2>{this.props.attributes.role}</h2>
          </div>
        </div>
        <HeroStats teamInfo={this.props.team} totalTime={this.props.stats.time_played_total} playerToShow={this.props.playerToShow} season={this.props.season}/>
      </div>
    )
  }
}

export default MainBody