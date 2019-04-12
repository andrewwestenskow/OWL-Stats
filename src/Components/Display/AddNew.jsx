import React, { Component } from 'react'


class AddNew extends Component {

  state = {
    name: '',
    eliminations_avg_per_10m: '',
    hero_damage_avg_per_10m: '',
    healing_avg_per_10m: '',
    deaths_avg_per_10m: '',
    rank: ''
  }

  handleChange = (e) => {
    let {value, name} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    let player = this.state
    this.props.addNew(player)
    this.setState({
      name: '',
      eliminations_avg_per_10m: '',
      hero_damage_avg_per_10m: '',
      healing_avg_per_10m: '',
      deaths_avg_per_10m: '',
      rank: ''
    })
  }


  render() {
    return (

      // Fields to input new player data
      
      <div className='NewForm'>
        <input value={this.state.name} 
        onChange={this.handleChange} 
        type="text" 
        name="name" 
        placeholder='Name'
        className='NewStatInput'/>

        <input value={this.state.rank}
        onChange={this.handleChange} 
        type="number" 
        name="rank" 
        placeholder='Rank'
        className='NewStatInput' />

        <input value={this.state.eliminations_avg_per_10m}
        onChange={this.handleChange} 
        type="number" 
        name="eliminations_avg_per_10m" 
        placeholder='Elims/10 min'
        className='NewStatInput'/>

        <input value={this.state.hero_damage_avg_per_10m}
        onChange={this.handleChange} 
        type="number" 
        name="hero_damage_avg_per_10m" 
        placeholder='Hero Damage/10min'
        className='NewStatInput'/>

        <input value={this.state.healing_avg_per_10m}
        onChange={this.handleChange} 
        type="number" 
        name="healing_avg_per_10m" 
        placeholder='Healing/10 min'
        className='NewStatInput'/>
        
        <input value={this.state.deaths_avg_per_10m}
        onChange={this.handleChange} 
        type="number" 
        name="deaths_avg_per_10m" 
        placeholder='Deaths/10 min'
        className='NewStatInput'/>

        <button className='GreenButton' onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default AddNew