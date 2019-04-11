import React, {Component} from 'react'


class Individual extends Component {

  state = {
    edit: false,
    name: '',
    eliminations_avg_per_10m: 0,
    hero_damage_avg_per_10m: 0,
    healing_avg_per_10m: 0,
    deaths_avg_per_10m: 0
  }

  editing = () => {
    this.setState({
      edit: !this.state.edit
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

  render(){

    let {name, eliminations_avg_per_10m, hero_damage_avg_per_10m, healing_avg_per_10m, deaths_avg_per_10m} = this.props.stats

    return(
      
      <tbody key={name}>

      {/* If edit is clicked, the text will be replaced with an input box */}
      <tr>
        <td>{this.state.edit ? 
        <input type="text" 
        onChange={this.handleChange}
        defaultValue={name} 
        name='name' 
        /> : name}</td>

        <td>{this.state.edit ? 
        <input type="number" 
        defaultValue={eliminations_avg_per_10m}
        name='eliminations_avg_per_10m'
        onChange={this.handleChange}/> 
        : (eliminations_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>

        <td>{this.state.edit ? 
        <input type="number" 
        defaultValue ={hero_damage_avg_per_10m}
        name='hero_damage_avg_per_10m'
        onChange={this.handleChange}/> 
        : (hero_damage_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>

        <td>{this.state.edit ? 
        <input type="number" 
        defaultValue={healing_avg_per_10m}
        name='healing_avg_per_10m'
        onChange={this.handleChange}/> 
        : (healing_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>

        <td>{this.state.edit ? 
        <input type="number" 
        defaultValue={deaths_avg_per_10m}
        name='deaths_avg_per_10m'/> 
        : (deaths_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>

        {this.state.edit ? <td><button>Submit</button></td>  : null}

        <td><button onClick={this.editing}>{this.state.edit ? `Cancel` : `Edit`}</button></td>

        <td><button onClick={this.handleDelete}>Delete</button></td>
      </tr>
      
        
    </tbody>
    
      
    )
  }
}

export default Individual