import React, {Component} from 'react'


class EditForm extends Component {
  state = {
    name: '',
    eliminations_avg_per_10m: 0,
    hero_damage_avg_per_10m: 0,
    healing_avg_per_10m: 0,
    deaths_avg_per_10m: 0
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
      deaths_avg_per_10m: ''
    })
  }


  render() {
    return (
      <div>

      {/* Inputs for updated player data  */}

        <input value={this.state.name} 
        onChange={this.handleChange} 
        type="text" 
        name="name" 
        placeholder='Name'/>

        <input value={this.state.eliminations_avg_per_10m}
        onChange={this.handleChange} 
        type="number" 
        name="eliminations_avg_per_10m" 
        placeholder='Elims/10 min'/>

        <input value={this.state.hero_damage_avg_per_10m}
        onChange={this.handleChange} 
        type="number" 
        name="hero_damage_avg_per_10m" 
        placeholder='Hero Damage/10min'/>

        <input value={this.state.healing_avg_per_10m}
        onChange={this.handleChange} 
        type="number" 
        name="healing_avg_per_10m" 
        placeholder='Healing/10 min'/>
        
        <input value={this.state.deaths_avg_per_10m}
        onChange={this.handleChange} 
        type="number" 
        name="deaths_avg_per_10m" 
        placeholder='Deaths/10 min'/>

        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default EditForm