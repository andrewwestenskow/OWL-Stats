import React, {Component} from 'react'


class Individual extends Component {

  state = {
    makeSure: false,
    edit: false,
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

    return(

      
      
      <tbody key={name} className='StatsBody'>

      {/* If edit is clicked, the text will be replaced with an input box */}
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
        /> : rank}</td>

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

        <td className='StatsCell'>{this.state.edit ? 
        <input type="number" 
        defaultValue={deaths_avg_per_10m}
        name='deaths_avg_per_10m'
        onChange={this.handleChange}
        className='StatInput'/> 
        : (deaths_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}
        </td>

        <td className='ButtonHold'><button 
        style={{marginLeft: 5}} 
        className='RedButton' 
        onClick={this.editing}>{this.state.edit ? `Cancel` : `Edit`}</button></td>

        {this.state.edit ? <td className='ButtonHold'><button className='SmallGreenButton'onClick={this.handleUpdate}>Submit</button></td>  : null}


        <td className='ButtonHold'><button className='RedButton' onClick={this.makeSure}>Delete</button></td>
      </tr>
      
      {this.state.makeSure ? <tr className="MakeSure">
      <td>
      <h2>Delete {this.state.name}?</h2>
      <button className='RedButton' onClick={this.handleDelete}>Confirm</button>
      <button className='SmallGreenButton' onClick={this.makeSure}>Cancel</button>
      </td>
      </tr>
      : null}
    </tbody>
    
    
    )
  }
}

export default Individual