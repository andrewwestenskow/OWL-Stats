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
    id: this.props.id
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
        name='deaths_avg_per_10m'
        onChange={this.handleChange}/> 
        : (deaths_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}
        </td>

        {this.state.edit ? <td><button onClick={this.handleUpdate}>Submit</button></td>  : null}

        <td><button onClick={this.editing}>{this.state.edit ? `Cancel` : `Edit`}</button></td>

        <td><button onClick={this.makeSure}>Delete</button></td>
      </tr>
      
      {this.state.makeSure ? <tr className="MakeSure">
      <td>
      <h2>Delete {this.state.name}?</h2>
      <button onClick={this.handleDelete}>Confirm</button>
      <button onClick={this.makeSure}>Cancel</button></td>
      </tr>
      : null}
    </tbody>
    
    
    )
  }
}

export default Individual