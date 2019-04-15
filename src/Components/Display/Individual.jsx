import React, {Component} from 'react'
import Bronze from './RankIcons/Bronze.png'
import Silver from './RankIcons/Silver.png'
import Gold from './RankIcons/Gold.png'
import Plat from './RankIcons/Plat.png'
import Diamond from './RankIcons/Diamond.png'
import Masters from './RankIcons/Master.png'
import GM from './RankIcons/GM.png'



class Individual extends Component {

  state = {
    makeSure: false,
    edit: false,
    update: false,
    name: this.props.stats.name,
    eliminations_avg_per_10m: this.props.stats.eliminations_avg_per_10m,
    hero_damage_avg_per_10m: this.props.stats.hero_damage_avg_per_10m,
    healing_avg_per_10m: this.props.stats.healing_avg_per_10m,
    deaths_avg_per_10m: this.props.stats.deaths_avg_per_10m,
    id: this.props.id,
    rank: this.props.stats.rank
  }

  editing = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  makeSure = () => {
    this.setState({
      makeSure: !this.state.makeSure
    })
  }

  handleDelete = () => {
    let {id} = this.props.stats
    this.props.handleDelete(id)
  }

  handleChange = (e) => {
    let {value, name} = e.target
    this.setState({
      [name]: value
    })
  }

  handleUpdate = () => {
    let player = this.state
    this.props.handleUpdate(player)
    this.setState({
      edit: false
    })
  }

  
    
  



  render(){

    let {name, eliminations_avg_per_10m, hero_damage_avg_per_10m, healing_avg_per_10m, deaths_avg_per_10m, rank} = this.props.stats

    let rankImage

    // Determines which rank image to show

    if (rank < 1500) {
      rankImage = Bronze
    } else if (rank >= 1500 && rank < 2000){
      rankImage = Silver
    } else if (rank >=2000 && rank <2500){
      rankImage = Gold
    } else if (rank >= 2500 && rank <3000){
      rankImage = Plat
    } else if (rank >=3000 && rank <3500){
      rankImage = Diamond
    } else if (rank >=3500 && rank <4000) {
      rankImage = Masters
    } else if (rank >=4000){
      rankImage = GM
    }

    return(

      
      
      <tbody key={name} className='StatsBody'>

      {/* If edit is clicked, the text will be replaced with an input box.  The following inputs accept the new stats */}
      <tr className='StatsRow'>
        <td className='StatsCell'>{this.state.edit ? 
        <input type="text" 
        onChange={this.handleChange}
        defaultValue={name} 
        name='name'
        className='StatInput' 
        /> : name}</td>

        <td className='StatsCell'>{this.state.edit ? 
        <input type="number" 
        onChange={this.handleChange}
        defaultValue={rank} 
        name='rank'
        className='RankInput' 
        /> : <div className='Rank'>
          <img src={rankImage} className='RankIcon' alt='Icon'/>
          {rank}
        </div>}</td>

        <td className='StatsCell'>{this.state.edit ? 
        <input type="number" 
        defaultValue={eliminations_avg_per_10m}
        name='eliminations_avg_per_10m'
        onChange={this.handleChange}
        className='StatInput'/> 
        : (eliminations_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>

        <td className='StatsCell'>{this.state.edit ? 
        <input type="number" 
        defaultValue ={hero_damage_avg_per_10m}
        name='hero_damage_avg_per_10m'
        onChange={this.handleChange}
        className='StatInput'/> 
        : (hero_damage_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>

        <td className='StatsCell'>{this.state.edit ? 
        <input type="number" 
        defaultValue={healing_avg_per_10m}
        name='healing_avg_per_10m'
        onChange={this.handleChange}
        className='StatInput'/> 
        : (healing_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>

        <td className='StatsCell-Deaths'>{this.state.edit ? 
        <input type="number" 
        defaultValue={deaths_avg_per_10m}
        name='deaths_avg_per_10m'
        onChange={this.handleChange}
        className='StatInput'/> 
        : (deaths_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}
        </td>

        <td className='StatsCell-Button'><div className='ButtonHold'>

        {this.state.edit ? <div><button className='SmallGreenButton'onClick={this.handleUpdate}>Submit</button></div>
        : null}
        
        <button
        style={{marginLeft: 5}}
        className='RedButton'
        onClick={this.editing}>{this.state.edit ? `Cancel` : `Edit`}</button>
        
        <button className='RedButton' onClick={this.makeSure}>Delete</button></div></td>
        
      </tr>
      
      {this.state.makeSure ? <tr className="MakeSure">

      {/* Delete confirmation window     */}

      <td>
      <h2>Delete {this.state.name}?</h2>
      <button className='RedButton' 
      onClick={this.handleDelete}>Confirm</button>
      
      <button className='SmallGreenButton' 
      onClick={this.makeSure}>Cancel</button>
      </td>
      </tr>
      : null}
    </tbody>
    
    
    )
  }
}

export default Individual